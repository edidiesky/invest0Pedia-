import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const CreateCoinCart = createAsyncThunk(
  '/create/coincart',
  async (name, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.post(`/api/v1/coincart`,name, config);
      return data.transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);



export const getAllMarket = createAsyncThunk(
    '/get/coincart',
    async (name, thunkAPI) => {
      const state = thunkAPI.getState()
      try {
        const config = {
          headers: {
            authorization: `Bearer ${state.user.token}`
          }
        }
        const { data } = await axios.get(`/api/v1/market`, config);
        return data.market;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response && error.response.data.message
          ? error.response.data.message : error.message);
      }
    }
  );

  export const AdminUpdateMarket = createAsyncThunk(
    '/update/market',
    async (name, thunkAPI) => {
      const state = thunkAPI.getState()
      try {
        const config = {
          headers: {
            authorization: `Bearer ${state.user.token}`
          }
        }
        const { _id } = state.market.market[0]
        const { data } = await axios.put(`/api/v1/market/${_id}`,name, config);
        return data.updatedMarket;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response && error.response.data.message
          ? error.response.data.message : error.message);
      }
    }
  );