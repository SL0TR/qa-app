import http from '../services/httpService';

const apiEndpoint = '/api/auth';

export async function login(user) {
  return http.post(apiEndpoint, user);
}