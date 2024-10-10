import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5002/api',  // Backend API'nizin doğru URL'sini buraya ekleyin
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;