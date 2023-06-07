import axios from "axios"

export const AuthInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + "auth/",
  withCredentials: true,
})
