import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://185.237.207.38:7777/petersontrade.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
