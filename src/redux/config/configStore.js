import { configureStore } from '@reduxjs/toolkit';
import postList from '../modules/postListSlice';

const store = configureStore({
  reducer: {
    postList,
  },
});

export default store;
