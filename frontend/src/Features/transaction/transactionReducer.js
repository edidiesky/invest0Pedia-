import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const gettransactionById = createAsyncThunk(
  '/get/transactionBy/id',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.get(`/api/v1/transaction`, config);

      return data.transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

export const createTransactionById = createAsyncThunk(
  '/get/createTransaction',
  async (transactionItems, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.post(`/api/v1/transaction`,transactionItems, config);

      return data.transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

// export const gettransactionStats = createAsyncThunk(
//   '/get/stats',
//   async (id, thunkAPI) => {
//     const state = thunkAPI.getState()
//     try {
//       const config = {
//         headers: {
//           authorization: `Bearer ${state.user.token}`
//         }
//       }
//       const { data } = await axios.get(`/api/v1/transaction/stats`, config);

//       return data.totalOrder;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response && error.response.data.message
//         ? error.response.data.message : error.message);
//     }
//   }
// );

export const getAlltransaction = createAsyncThunk(
  '/getall/transaction',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.get(`/api/v1/transaction`, config);

      return data.transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

export const AdminUpdatetransaction = createAsyncThunk(
  '/update/transaction',
  async ({name, id}, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.get(`/api/v1/transaction/${id}`,name, config);

      return data.updatedTransaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);
