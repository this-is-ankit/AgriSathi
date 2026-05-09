declare const process: { env: { [key: string]: string | undefined } };

// Default to local backend if not provided in environment
export const API_BASE_URL = process.env.API_BASE_URL || 'http://10.0.2.2:8000'; // 10.0.2.2 is local loopback for Android emulator

export const API_TIMEOUT = 10000; // 10 seconds

export const ENDPOINTS = {
  // Placeholders for future APIs
  auth: {
    login: '/api/v1/auth/login',
  },
  prediction: {
    scan: '/api/v1/predict',
  },
};
