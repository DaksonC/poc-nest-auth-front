import { AxiosInstance } from "./AxiosInstance";

export interface IUserData {
  email: string;
  password: string;
}

export async function LoginUser(data: IUserData) {
  const response = await AxiosInstance.post('/login', data);
  const { access_token } = response.data;

  return access_token;
}