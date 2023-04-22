import { createSlice } from "@reduxjs/toolkit";

import {
  getAllMarket,
  AdminUpdateMarket,
} from "./marketReducer";

const initialState = {
  marketIsSuccess: false,
  marketIsError: false,
  marketIsLoading: false,
  alertText: "",
  alertType: "",
  market: [],
  coindetails: null
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    getCoinDetails: (state, action) => {
      const payload = action.payload
      state.coindetails = payload
    }
  },
  extraReducers: {
    // getting customers market
    [AdminUpdateMarket.pending]: (state) => {
      state.marketIsLoading = true;
    },
    [AdminUpdateMarket.fulfilled]: (state, action) => {
      state.marketIsLoading = false;
      state.marketIsSuccess = true
      state.market = action.payload;
      state.showAlert = true;
      state.alertText = 'Your market has been succesfully updated';
      state.alertType = "sucess";
    },
    [AdminUpdateMarket.rejected]: (state, action) => {
      state.marketIsLoading = false;
      state.showAlert = true;
      state.marketIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    // getting all customers market
    [getAllMarket.pending]: (state) => {
      state.marketIsLoading = true;
    },
    [getAllMarket.fulfilled]: (state, action) => {
      state.marketIsLoading = false;
      state.market = action.payload;
    },
    [getAllMarket.rejected]: (state, action) => {
      state.marketIsLoading = false;
      state.showAlert = true;
      state.marketIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },


  },
});

export const { } =
  marketSlice.actions;

export default marketSlice.reducer;
