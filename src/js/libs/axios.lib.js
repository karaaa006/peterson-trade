import axios from 'axios';

const TOKEN = '';

export const kommoAxios = axios.create({
  baseURL: 'https://petersontrade.kommo.com/api/v4/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
});
