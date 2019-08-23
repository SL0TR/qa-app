import http from './httpService';
import { toast } from 'react-toastify';
const apiEndpoint = '/api/users';

export async function registerUser (user) {

  const { data } = await http.post(apiEndpoint, user);
  if(data) {
    toast('User registration successful!')
  }
}