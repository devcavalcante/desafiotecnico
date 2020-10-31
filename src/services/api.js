import axios from "axios";

const api = axios.create({
  baseURL: " https://api.github.com/users",
  responseType: "json",
});

export default api;
