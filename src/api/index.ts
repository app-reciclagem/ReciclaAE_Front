import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.2.109:3000',
});
