import { configureStore } from '@reduxjs/toolkit';
import postList from '../modules/postListSlice';
import addPostList from '../modules/addPostListSlice';
import deletePostList from '../modules/deletePostListSlice';

const store = configureStore({
  reducer: {
    postList,
    addPostList,
    deletePostList,
  },
});

export default store;
