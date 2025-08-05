import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  // (error) => {
  //   const errorMessage =
  //     error.response.data.errorMessage ?? "Unknown Error Occurred!";
  //   return Promise.reject(error);
  // },
);
export default axiosInstance;
