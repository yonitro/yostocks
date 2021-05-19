import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { DATA_TOOLKIT_TOKEN } from "./requests";

export default class ServicesApi {
  private static axiosInstance: AxiosInstance;

  static init() {
    this.axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
     //baseURL:'./',

      headers: { 
        // "Access-Control-Allow-Origin": "*",
        "Accept": "*/*"
      },

    });
    this.addApiInterseptors();
  }

  private static addApiInterseptors() {
    this.axiosInstance.interceptors.request.use((request) => {
      request.headers["authorization"] = `Token ${localStorage.getItem(
        DATA_TOOLKIT_TOKEN,
      )}`;
      return request;
    });
  }

  static get<T>(url: string, config?: AxiosRequestConfig) {
    return this.axiosInstance.get<T>(url, config);
  }

  static post<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axiosInstance.post<T>(url, data, config);
  }

  static request<T>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<T>(config);
  }
}
