import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password, name, isSignUp } = await request.json();
    const domain = process.env.AUTH0_ISSUER_BASE_URL;
    const clientId = process.env.AUTH0_CLIENT_ID;
    const clientSecret = process.env.AUTH0_CLIENT_SECRET;

    if (isSignUp) {
      try {
        const signupResponse = await fetch(`${domain}/dbconnections/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: clientId,
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

    // Login attempt using authorization code flow
    try {
      // First, get the authorization URL
      const params = new URLSearchParams({
        response_type: 'code',
        client_id: clientId ?? '',
        redirect_uri: `${process.env.AUTH0_BASE_URL}/api/auth/callback`,
        scope: 'openid profile email',
        audience: `${domain}/api/v2/`,
        connection: 'Username-Password-Authentication',
        username: email,
        password: password,
      });
      const authUrl = `${domain}/authorize?` + params.toString();

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
