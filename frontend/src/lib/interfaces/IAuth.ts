export interface AuthState {
  token: any;
  name: string;
  email: string;
  _id: string;
  registerStatus: string;
  registerError: string;
  loginStatus: string;
  loginError: string;
  userLoaded: false;
  isAdmin: false;
}
