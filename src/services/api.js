import axios from "axios";

export const api = axios.create({
  baseURL: "https://aircncbackend.herokuapp.com"
});
