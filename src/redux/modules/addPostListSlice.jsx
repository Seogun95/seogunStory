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
export const __addPostList = createAsyncThunk(
  'addPostList',
  async ({ title, content, viewUrl }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BLOG_URL}/postList`,
        {
          title,
          content,
          viewUrl,
        }
      );

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPostListSlice = createSlice({
  name: 'addPost',
  initialState,
  reducers: {},
  // 미들웨어
  extraReducers: (builder) => {
    builder.addCase(__addPostList.pending, (state, atcion) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__addPostList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.postList = action.payload;
    });
    builder.addCase(__addPostList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

// 액션함수
// export const {} = postListSlice.actions;
// 리듀서
export default addPostListSlice.reducer;
