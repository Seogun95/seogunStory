import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// 초기값
const initialState = {
  postList: [],
  isLoading: false,
  isError: false,
  error: null,
};

// 미들웨어
export const __getPostList = createAsyncThunk(
  'getPostList',
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BLOG_URL}/postList`
      );
    
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {},
  // 미들웨어
  extraReducers: (builder) => {
    builder.addCase(__getPostList.pending, (state, atcion) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__getPostList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.postList = action.payload;
    });
    builder.addCase(__getPostList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

// 액션함수
// export const {} = postListSlice.actions;
// 리듀서
export default postListSlice.reducer;
