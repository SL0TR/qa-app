import http from './httpService';

const apiEndpoint = '/api/answers';

export function registerAnswer (answer) {
  return http.post(apiEndpoint, answer);
}

export async function getAllAnswers () {
  return http.get(apiEndpoint);
}


export async function deleteAnswer(id) {
  return http.delete(apiEndpoint + `/${id}`);
}
