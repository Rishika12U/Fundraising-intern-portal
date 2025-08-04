import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fundraising-intern-portal-vjgo.onrender.com', // replace with actual Render URL
  withCredentials: true, // if using cookies/auth
});

export default axiosInstance;
