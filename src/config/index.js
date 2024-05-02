const isLive = false;
export const Method = {
  GET: 'get',
  POST: 'post',
};
export const UATBASEURL = isLive ? 'https://jsonkeeper.com' : 'insert live url';
export const SPRINGCTURL = 'https://reqres.in/api/login'

export const asyncKeys = {
  HeaderToken: '@Header_TOKEN',
  isLoggedIn : '@isLogged_IN',
  EmailId : '@Email_Id',
};
