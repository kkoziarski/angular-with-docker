export const APP_SETTINGS = {
  EnvName: '',
  ApiHostUrl: '',
  AdalConfig: {
    tenant: '',
    clientId: '',
    redirectUri: window.location.origin + '/auth-callback',
    postLogoutRedirectUri: window.location.origin + '/auth-callback'
  }
};
