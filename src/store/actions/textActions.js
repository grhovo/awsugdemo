import { API_LINK } from '../../data/API';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { gettingAccessToken } from '../../helpers';

export const getTextInfo = createAsyncThunk(
  'text/getTextInfo',
  async (id, thunkAPI) => {
    try {
      const config = await gettingAccessToken();
      const resp = await axios(`${API_LINK}/text?id=${id}`, config);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const addTextInfo = createAsyncThunk(
  'text/addTextInfo',
  async (body, thunkAPI) => {
    try {
      const config = await gettingAccessToken();
      const resp = await axios.post(`${API_LINK}/text`, body, config);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
