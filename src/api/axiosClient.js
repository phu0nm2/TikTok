import axios from "axios";
import apiConfig from ".";

const axiosClient = axios.create({
  baseURL: apiConfig.baseURL,
});

export default axiosClient;
