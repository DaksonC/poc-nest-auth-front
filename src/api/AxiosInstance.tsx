import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_BASE_URL,
  timeout: 1000,
});