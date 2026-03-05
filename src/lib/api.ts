import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000',
});

// Attach access token — implemented in Sprint 1
api.interceptors.request.use((config) => config);

// 401 → refresh → retry — implemented in Sprint 1
api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);
