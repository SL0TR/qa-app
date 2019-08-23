import http from './httpService';
import { toast } from 'react-toastify';
const apiEndpoint = '/api/users';

export async function registerUser (user) {
  return http.post(apiEndpoint, user);
}

export async function getAllUsers (user) {
  const { data } = await http.get(apiEndpoint, user);
  console.log(data);
  return data;
}
