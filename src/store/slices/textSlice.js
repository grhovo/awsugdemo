import { createSlice } from '@reduxjs/toolkit';
import { getMarketInfo } from '../actions/marketActions';
import { getTextInfo } from '../actions/textActions';

const textSlice = createSlice({
  name: 'market',
  initialState: {
    message: '',
  },
  reducers: {
    setMessage(state, { payload }) {
      state.message = payload;
    },
  },
  extraReducers: {
    [getTextInfo.fulfilled]: (state, { payload })=> {
      state.message = payload.text;
    },
  }
});

export const { setMessage } = textSlice.actions;
export default textSlice;
