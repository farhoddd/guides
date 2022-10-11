import axios from "axios";

const BASE_URL = 'https://guide-backend.crocos.kz'

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance
