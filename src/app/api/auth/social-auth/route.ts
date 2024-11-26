import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { provider, isSignUp } = await request.json();

    const domain = process.env.AUTH0_ISSUER_BASE_URL;
    const clientId = process.env.AUTH0_CLIENT_ID;
    const redirectUri = `${process.env.AUTH0_BASE_URL}/api/auth/callback`;

    const authUrl = new URL(`${domain}/authorize`);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('client_id', clientId!);
    authUrl.searchParams.append('redirect_uri', redirectUri);
    authUrl.searchParams.append('scope', 'openid profile email');
    authUrl.searchParams.append('connection', provider);
    
    if (isSignUp) {
      authUrl.searchParams.append('screen_hint', 'signup');
    }

    return NextResponse.json({ authUrl: authUrl.toString() });
  } catch (error) {
    console.error('Social auth error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize social authentication' },
      { status: 500 }
    );
  }
}
