import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BLOG_URL,
});

export const jwtserver = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
