import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { email, password, name, isSignUp } = await request.json();

    if (isSignUp) {
      try {
        const signupResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/dbconnections/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: process.env.AUTH0_CLIENT_ID,
            email,
            password,
            name,
            connection: 'Username-Password-Authentication',
          }),
        });

        const signupData = await signupResponse.json();

        if (!signupResponse.ok) {
          console.error('Signup error response:', signupData);

          if (signupData.code === 'invalid_signup') {
            return NextResponse.json({ 
              error: 'This email is already registered. Please try logging in instead.' 
            }, { status: 400 });
          }

          if (signupData.name === 'PasswordStrengthError') {
            return NextResponse.json({ 
              error: 'Password is too weak. Please follow all password requirements.' 
            }, { status: 400 });
          }

          throw new Error(signupData.description || signupData.message || 'Signup failed');
        }
      } catch (signupError) {
        console.error('Signup error:', signupError);
        return NextResponse.json({ 
          error: signupError instanceof Error ? signupError.message : 'Failed to create account' 
        }, { status: 400 });
      }
    }

    if (!isSignUp) {
      try {
        // Get access token directly using Resource Owner Password grant
        const tokenResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            grant_type: 'password',
            username: email,
            password: password,
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
            scope: 'openid profile email',
          }),
        });

        const tokenData = await tokenResponse.json();

        if (!tokenResponse.ok) {
          return NextResponse.json({ error: tokenData.error_description || 'Login failed' }, { status: 401 });
        }

        // Get user info using the access token
        const userInfoResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`, {
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
          },
        });

        const userInfo = await userInfoResponse.json();

        // Create a session cookie
        const response = NextResponse.json({ 
          success: true,
          user: userInfo
        });

        // Set secure HTTP-only cookie with the access token
        response.cookies.set('auth_token', tokenData.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24, // 24 hours
        });

        return response;
      } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Login failed' }, { status: 500 });
      }
    }

    // Login attempt using authorization code flow
    try {
      // First, get the authorization URL
      const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.AUTH0_CLIENT_ID ?? '',
        redirect_uri: `${process.env.AUTH0_BASE_URL}/api/auth/callback`,
        scope: 'openid profile email',
        audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
        connection: 'Username-Password-Authentication',
        username: email,
        password: password,
      });
      const authUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/authorize?${params.toString()}`;

      return NextResponse.json({ 
        redirectUrl: authUrl,
        success: true 
      });
    } catch (loginError) {
      console.error('Login error:', loginError);
      return NextResponse.json({ 
        error: loginError instanceof Error ? loginError.message : 'Authentication failed' 
      }, { status: 401 });
    }
  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json(
      { error: 'Authentication failed. Please try again.' },
      { status: 500 }
    );
  }
}
