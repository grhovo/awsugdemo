import { createSlice } from '@reduxjs/toolkit';
import { getMarketInfo } from '../actions/marketActions';

const marketSlice = createSlice({
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
    [getMarketInfo.fulfilled]: (state, { payload })=> {
      state.message = payload.message;
    },
  }
});

export const { setMessage } = marketSlice.actions;
export default marketSlice;
