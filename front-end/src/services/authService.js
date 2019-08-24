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

export function setUserLocalStorage(user) {
  window.localStorage.userId = user._id;
  window.localStorage.userEmail = user.email;
  window.localStorage.userIsAdmin = user.isAdmin;
}

export function checkUserLocalStorate() {
  if( window.localStorage.userId && window.localStorage.userEmail && window.localStorage.userIsAdmin )  {
    return true;
  } else {
    return false;
  }
}

export function getUserLocalStorage() {
  return {
    _id: window.localStorage.userId,
    email: window.localStorage.userEmail,
    isAdmin: window.localStorage.userIsAdmin
  }
}

export function removeUserLocalStorage(user) {
  window.localStorage.userId = '';
  window.localStorage.userEmail = '';
  window.localStorage.userIsAdmin = '';
}