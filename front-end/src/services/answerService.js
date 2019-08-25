import http from './httpService';

import config from '../config.js';

const apiEndpoint = config.backendUrl + '/api/answers';

export function registerAnswer (answer) {
  return http.post(apiEndpoint, answer);
}

export async function getAllAnswers () {
  return http.get(apiEndpoint);
}


export async function deleteAnswer(id) {
  return http.delete(apiEndpoint + `/${id}`);
}

export async function getUserAnswer(data) {
  return http.post(apiEndpoint + `/useranswer`, data);
}
