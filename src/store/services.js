import axios from "axios";

const url = "https://interview.tivit.io";

const axiosInstance = axios.create({
  baseURL: url + "/v1",
  headers: {
    "Content-Type": null,
  },
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
};
