import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWallet = createAsyncThunk(
  '/get/WalletBy/id',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.get(`/api/v1/wallet`, config);

      return data.wallet;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

export const createWalletById = createAsyncThunk(
  '/get/createWallet',
  async (WalletItems, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.post(`/api/v1/wallet`,WalletItems, config);

      return data.wallet;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);


export const AdminUpdateWallet = createAsyncThunk(
  '/update/Wallet',
  async (name, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { _id } = state.wallet.Wallet[0]
      const { data } = await axios.put(`/api/v1/wallet/${_id}`,name, config);

      return data.updatedWallet;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);
