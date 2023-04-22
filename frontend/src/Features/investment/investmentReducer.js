import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getinvestmentById = createAsyncThunk(
  '/get/investment',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.get(`/api/v1/investment/${id}`, config);

      return data.investment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

// export const getinvestmentStats = createAsyncThunk(
//   '/get/stats',
//   async (id, thunkAPI) => {
//     const state = thunkAPI.getState()
//     try {
//       const config = {
//         headers: {
//           authorization: `Bearer ${state.user.token}`
//         }
//       }
//       const { data } = await axios.get(`/api/v1/investment/stats`, config);

//       return data.totalOrder;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response && error.response.data.message
//         ? error.response.data.message : error.message);
//     }
//   }
// );

export const getAllinvestment = createAsyncThunk(
  '/getall/investment',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.get(`/api/v1/investment`, config);

      return data.investment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

export const AdminUpdateInvestment = createAsyncThunk(
  '/update/investment',
  async (name, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { _id } = state.investment.investmentDetails  
      const { data } = await axios.put(`/api/v1/investment/${_id}`,name, config);
      return data.updatedInvestment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

export const AdminCreateInvestment = createAsyncThunk(
  '/Create/investment',
  async (name, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { data } = await axios.post(`/api/v1/investment`,name, config);
      return data.investment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);

export const AdminDeleteInvestment = createAsyncThunk(
  '/delete/investment',
  async ({investmentDetails}, thunkAPI) => {
    const state = thunkAPI.getState()
    try {
      const config = {
        headers: {
          authorization: `Bearer ${state.user.token}`
        }
      }
      const { _id } = state.investment.investmentDetails  
      console.log(_id);
      const { data } = await axios.delete(`/api/v1/investment/${_id}`, config);
      return investmentDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response && error.response.data.message
        ? error.response.data.message : error.message);
    }
  }
);



