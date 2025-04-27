import axios from 'axios';

const feedbackStatRequest = axios.create({
  baseURL: 'https://api-orion-ufi.pt.xiaomi.com/api/v1',
  timeout: 10000,
  withCredentials: true
});

export { feedbackStatRequest };
