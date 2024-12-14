import axios from "axios";

export const baseURL = process.env.REACT_APP_BASE_URL;
const Axios = axios.create({
  baseURL,
  timeout: 5000000,
});

export class HttpClient {
  static async get(url, params) {
    const response = await Axios.get(url, { params });
    return response?.data;
  }

  static async post(url, data, options) {
    const response = await Axios.post(url, data, options);
    return response.data;
  }

  static async put(url, data, options) {
    const response = await Axios.put(url, data, options);
    return response.data;
  }

  static async delete(url, data, options) {
    const response = await Axios.delete(url, data, options);
    return response.data;
  }
}
