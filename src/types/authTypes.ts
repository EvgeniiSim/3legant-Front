export interface SignUpRequest {
   username: string;
   email: string;
   password: string;
}
export interface SignInRequest {
   email: string;
   password: string;
}

export interface IChangeUserInfoRequest {
   username: string;
   email: string;
}
