import { AxiosInstance } from "./AxiosInstance";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export async function CreateUser(user: IUser) {
  const response = await AxiosInstance.post('/user', user);

  return response.data;
}