import { API_LINK } from '../../data/API';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { config } from '../../constants';

export const getVideoInfo = createAsyncThunk(
  'video/getVideoInfo',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(`${API_LINK}/video`, config);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
