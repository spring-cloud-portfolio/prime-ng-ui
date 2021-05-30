import {AuthConfig} from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  scope: 'openid all',
  requireHttps: false,
  responseType: 'code',
  useHttpBasicAuth: true,
  showDebugInformation: true,
  clientId: 'user-service-client',
  issuer: 'http://127.0.0.1:9000',
  redirectUri: window.location.origin,
  dummyClientSecret: 'user-service-client-secret',
  revocationEndpoint: 'http://127.0.0.1:9000/oauth2/introspect',
};
