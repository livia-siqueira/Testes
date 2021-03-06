import axios from "axios";
import { getToken } from "./auth";

export const api = axios.create({
  baseURL: "https://api.github.com/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


        
        
        
        
        