export interface User {
  name: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface UserRegisterForm {
  email: string;
  password: string;
  name: string;
}

export interface UserLoginForm {
  email: string;
  password: string;
}

export interface CheckOutForm {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  acceptTerms: boolean;
  address: string;
}
