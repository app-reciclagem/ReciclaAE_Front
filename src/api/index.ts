import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.0.12:3000',
});
