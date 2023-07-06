import { AxiosInstance } from "./AxiosInstance";

export async function GetName() {
  const access_token = localStorage.getItem('access_token');
  const response = await AxiosInstance.get('/me', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.data.name;
}