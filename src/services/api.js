import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  responseType: "json"
});

api.interceptors.request.use(config => config, error => Promise.reject(error));
api.interceptors.response.use(config => config, error => Promise.reject(error));

export default api;
