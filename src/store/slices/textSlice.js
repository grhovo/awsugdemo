import { createSlice } from '@reduxjs/toolkit';
import { addTextInfo, getTextInfo } from '../actions/textActions';

const textSlice = createSlice({
  name: 'text',
  initialState: {
    message: '',
    list: [],
    isAdded: false,
  },
  reducers: {
    setMessage(state, { payload }) {
      state.message = payload;
    },
    setList(state, { payload }) {
      state.list = [...state.list, payload];
    },
    setIsAdded(state, { payload }) {
      state.isAdded = payload;
    },
  },
  extraReducers: {
    [getTextInfo.fulfilled]: (state, { payload })=> {
      state.message = payload.text;
    },
    [addTextInfo.fulfilled]: (state)=> {
      state.isAdded = true;
    },
  }
});

export const { setMessage, setList, setIsAdded } = textSlice.actions;
export default textSlice;
