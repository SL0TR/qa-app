import http from '../services/httpService';
import { toast } from 'react-toastify';

const apiEndpoint = '/api/auth';
const apiEndpointMe = '/api/me';
const apiEndpointSignOut = '/api/signout';

export async function login(user) {
  return http.post(apiEndpoint, user);
}

export async function me() {
  return http.get(apiEndpointMe);
}

export async function signout() {
  const { data } = await http.post(apiEndpointSignOut);
  if(data) {
    toast(data.msg)
  }
}