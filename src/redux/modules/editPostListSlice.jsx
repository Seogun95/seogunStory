import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../util/api';

// 초기값
const initialState = {
  postList: [],
  isLoading: false,
  isError: false,
  error: null,
};

// 미들웨어
export const __editPostList = createAsyncThunk(
  'eidtPostList',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.put(`/postList/${payload.id}`, {
        title: payload.title,
        content: payload.content,
        date: payload.date,
        viewUrl: payload.viewUrl,
      });

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editPostListSlice = createSlice({
  name: 'editPost',
  initialState,
  reducers: {},
  // 미들웨어
  extraReducers: (builder) => {
    builder.addCase(__editPostList.pending, (state, atcion) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__editPostList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.postList = action.payload;
    });
    builder.addCase(__editPostList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

// 액션함수
// export const {} = postListSlice.actions;
// 리듀서
export default editPostListSlice.reducer;
