import axiosInstance, { AxiosError } from 'axios';

import { API_URL } from '@/config';
import { cookies } from '@/utils/cookies';

const config = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const unathenticatedInstance = axiosInstance.create(config);
const authenticatedInstance = axiosInstance.create(config);

unathenticatedInstance.interceptors.response.use(
  (response) => response?.data,
  (error: AxiosError) => Promise.reject(error),
);

authenticatedInstance.interceptors.request.use(
  function (config) {
    const token = cookies.getAccess();
    if (token) {
      config.headers.token = `${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const api = authenticatedInstance;
