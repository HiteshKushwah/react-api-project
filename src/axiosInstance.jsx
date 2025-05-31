import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "https://node-js-wse4.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

// this is eht Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem("userToken"); 
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => {
    console.log("Request error:", error);
    return Promise.reject(error);
  }
);

// this  the Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 404)) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userName");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;