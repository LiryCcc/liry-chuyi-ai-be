import axios from 'axios';
import { DEEPSEEK_API_KEY } from '../config';

const deepseekReuqest = axios.create({
  baseURL: 'https://api.deepseek.com',
  timeout: 10000,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${DEEPSEEK_API_KEY}`
  }
});

export { deepseekReuqest };
