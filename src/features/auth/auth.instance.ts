import axios from "axios"

console.log("VITE_BASE_API_URL: ", import.meta.env.VITE_BASE_API_URL)

export const AuthInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + "auth/",
  withCredentials: true,
})
