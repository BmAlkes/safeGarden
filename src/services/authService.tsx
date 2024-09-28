import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,  // Ensures credentials like cookies are sent
  headers: {
      'Content-Type': 'application/json'
  }
});

axios.defaults.withCredentials = true;

export default api;
