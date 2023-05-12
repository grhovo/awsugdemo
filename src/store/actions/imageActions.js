import { API_LINK } from '../../data/API';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { gettingAccessToken } from '../../helpers';

export const getImageInfo = createAsyncThunk(
  'image/getImageInfo',
  async (_, thunkAPI) => {
    try {
      const config = await gettingAccessToken();
      const resp = await axios(`${API_LINK}/image`, config);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
