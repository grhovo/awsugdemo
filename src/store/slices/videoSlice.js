import { createSlice } from '@reduxjs/toolkit';
import { getVideoInfo } from '../actions/videoActions';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    message: '',
  },
  reducers: {
    setMessage(state, { payload }) {
      state.message = payload;
    },
  },
  extraReducers: {
    [getVideoInfo.fulfilled]: (state, { payload })=> {
      state.message = payload.message;
    },
  }
});

export const { setMessage } = videoSlice.actions;
export default videoSlice;
