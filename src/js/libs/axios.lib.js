import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://petersontrade.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
