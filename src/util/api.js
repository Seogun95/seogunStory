import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BLOG_URL,
});

export default instance;
