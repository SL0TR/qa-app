import http from './httpService';

const apiEndpoint = '/api/questions';

export function registerQuestion (question) {
  return http.post(apiEndpoint, question);
}

export async function getAllQuestions () {
  return http.get(apiEndpoint);
}


export async function deleteQuestion (id) {
  return http.delete(apiEndpoint + `/${id}`);
}
