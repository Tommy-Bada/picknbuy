import axios from "axios";
// import { API_URL } from "./constants";

const instance = axios.create({
  //   baseURL: API_URL,
});

instance.defaults.headers.common = {
  //   Authorization: `Bearer ${sessionStorage.getItem(TOKEN_NAME) ?? null}`,
};
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);

export default instance;
