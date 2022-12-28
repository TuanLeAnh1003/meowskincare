import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config()

// console.log(window.env.API_URL);
const axiosInstance = axios.create({
  // baseURL: `http://localhost:5000/api/v1/`,
  baseURL: `https://uitwatch.herokuapp.com/api/v1/`,
});

// axiosInstance.interceptors.request.use(function (config) {
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
