import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT } from './config';
import { setupInterceptors } from './interceptors';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

setupInterceptors(apiClient);

export default apiClient;
