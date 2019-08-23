import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && 
    error.response.status >= 400 && 
    error.response.status <500;

  if (!expectedError) {
    toast.error(error.message);
  }

  toast.error(error.message)
  return Promise.reject(error);
})

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put
}