import http from './httpService';
const apiEndpoint = '/api/users';

export async function registerUser (user) {
  return http.post(apiEndpoint, user);
}

export async function getAllUsers (user) {
  return http.get(apiEndpoint, user);
}
