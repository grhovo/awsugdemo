import { API_LINK } from '../../data/API';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMarketInfo = createAsyncThunk(
  'market/getMarketInfo',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(`${API_LINK}/market`);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
