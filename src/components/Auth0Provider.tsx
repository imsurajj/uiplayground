'use client';

import { Auth0Provider as BaseAuth0Provider } from '@auth0/auth0-react';
import { auth0Config } from '@/lib/auth0-config';

export function Auth0Provider({ children }: { children: React.ReactNode }) {
  return (
    <BaseAuth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: auth0Config.redirectUri,
        audience: auth0Config.audience,
      }}
    >
      {children}
    </BaseAuth0Provider>
  );
}
