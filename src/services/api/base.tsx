import axios from 'axios';
import { apiUrls } from '../../configs/constants';

const api = axios.create({
  baseURL: apiUrls.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add authorization headers)
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  },
);

export default api;

// error, cors, multiple API calls async and sync
