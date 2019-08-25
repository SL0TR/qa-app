import http from './httpService';
import config from '../config.js';

const apiEndpoint = config.backendUrl +  '/api/users';

export async function registerUser (user) {
  return http.post(apiEndpoint, user);
}

export async function getAllUsers (user) {
  return http.get(apiEndpoint, user);
}
