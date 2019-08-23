import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && 
    error.response.status >= 400 && 
    error.response.status <500;

  if (!expectedError) {
    toast.error(error.message);
  }

  const errMsg = error.response.data.msg || error.message;
  toast.error(errMsg);

  return Promise.reject(error);
})

// axios.defaults.withCredentials = true; 
const http = axios.create({
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default {
  get: http.get,
  post: http.post,
  delete: http.delete,
  put: http.put
}