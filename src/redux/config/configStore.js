import { configureStore } from '@reduxjs/toolkit';
import postList from '../modules/postListSlice';
import addPostList from '../modules/addPostListSlice';
import deletePostList from '../modules/deletePostListSlice';
import editPostList from '../modules/editPostListSlice';

const store = configureStore({
  reducer: {
    postList,
    addPostList,
    deletePostList,
    editPostList,
  },
});

export default store;
