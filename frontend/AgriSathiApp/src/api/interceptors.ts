import { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// import { storage } from '../utils/storage'; // Placeholder for future MMKV usage

export const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      // Future: Get token from storage and attach
      // const token = storage.getString('auth_token');
      // if (token) {
      //   config.headers.Authorization = \`Bearer \${token}\`;
      // }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      // Future: Handle 401 unauthorized, refresh token logic etc.
      return Promise.reject(error);
    }
  );
};
