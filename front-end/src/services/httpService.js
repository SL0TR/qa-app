import axios from 'axios';
import { toast } from 'react-toastify';

const http = axios.create({
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

http.interceptors.response.use(null, error => {
  const expectedError = error.response && 
    error.response.status >= 400 && 
    error.response.status <500;
  
  if (!expectedError) {
    toast.error(error.message);
  }
  if (error.response) {
    const errMsg = error.response.data.msg || error.response;
    if(errMsg !== 'No User in session') {
      toast.error(errMsg);
    }
  }
  

  return Promise.reject(error);
})

export default {
  get: http.get,
  post: http.post,
  delete: http.delete,
  put: http.put,
  all: http.all
}