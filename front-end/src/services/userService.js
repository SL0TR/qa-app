import http from './httpService';
const apiEndpoint = '/api/users';

export async function registerUser (user) {
  return http.post(apiEndpoint, user);
}

export async function getAllUsers (user) {
  const { data } = await http.get(apiEndpoint, user);
  console.log(data);
  return data;
}
