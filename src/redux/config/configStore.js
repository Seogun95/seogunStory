import { configureStore } from '@reduxjs/toolkit';
import postListSlice from '../modules/postListSlice';

const store = configureStore({
  reducer: {
    postListSlice,
  },
});

export default store;
