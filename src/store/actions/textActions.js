import { API_LINK } from '../../data/API';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { config } from '../../constants';

export const getTextInfo = createAsyncThunk(
  'market/getMarketInfo',
  async (id, thunkAPI) => {
    try {
      const resp = await axios(`${API_LINK}/text?id=${id}`, config);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
