import { createSlice } from '@reduxjs/toolkit';
import { getImageInfo } from '../actions/imageActions';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    message: '',
  },
  reducers: {
    setMessage(state, { payload }) {
      state.message = payload;
    },
  },
  extraReducers: {
    [getImageInfo.fulfilled]: (state, { payload })=> {
      state.message = payload.message;
    },
  }
});

export const { setMessage } = imageSlice.actions;
export default imageSlice;
