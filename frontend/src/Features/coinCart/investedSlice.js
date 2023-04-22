import { createSlice } from "@reduxjs/toolkit";

import {
  CreateCoinCart,
  getAllCoinCart,
} from "./cartReducer";

const initialState = {
  coincartIsSuccess: false,
  coincartIsError: false,
  coincartIsLoading: false,
  alertText: "",
  alertType: "",
  coincart:[],
  coindetails:null
};

const CoinCartSlice = createSlice({
  name: "coincart",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    addCoinToCart: (state, action) => {
      const coinpayload = action.payload
      const isCoinInCart = state.coincart.find(x => x._id === coinpayload._id)
      // check for existence in the coincart
      if (isCoinInCart) {
        // update the coincart
        state.coincart = state.coincart.map(x => x._id === isCoinInCart._id ? isCoinInCart : x)
        localStorage.setItem('bagItem', JSON.stringify(state.coincart))
        state.showAlert = true
        state.alertText = ` has been successfully added to your cart`
      } else {
        state.coincart = [...state.coincart, isCoinInCart]
        localStorage.setItem('bagItem', JSON.stringify(state.coincart))
        state.showAlert = true
        state.alertText = ` has been successfully added to your cart`
      }
    },
    getCoinDetails:(state, action)=> {
      const payload = action.payload
      state.coindetails= payload
    }
  },
  extraReducers: {
    // getting customers coincart
    [getAllCoinCart.pending]: (state) => {
      state.coincartIsLoading = true;
    },
    [getAllCoinCart.fulfilled]: (state, action) => {
      state.coincartIsLoading = false;
      state.coincart = action.payload;
    },
    [getAllCoinCart.rejected]: (state, action) => {
      state.coincartIsLoading = false;
      state.showAlert = true;
      state.coincartIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    // getting customers coincart stats
    // [getCustomerOrderStats.pending]: (state) => {
    //   state.isStatLoading = true;
    // },
    // [getCustomerOrderStats.fulfilled]: (state, action) => {
    //   state.isStatLoading = false;
    //   state.transactionStats = action.payload;
    // },
    // [getCustomerOrderStats.rejected]: (state, action) => {
    //   state.isStatLoading = false;
    //   state.showAlert = true;
    //   state.isStatError = true;
    //   state.alertText = action.payload;
    //   state.alertType = "danger";
    // },


    // getting all customers coincart
    [CreateCoinCart.pending]: (state) => {
      state.coincartIsLoading = true;
    },
    [CreateCoinCart.fulfilled]: (state, action) => {
      state.coincartIsLoading = false;
      state.coincart = action.payload;
    },
    [CreateCoinCart.rejected]: (state, action) => {
      state.coincartIsLoading = false;
      state.showAlert = true;
      state.coincartIsError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    
  },
});

export const { clearAlert, addCoinToCart, getCoinDetails } =
  CoinCartSlice.actions;

export default CoinCartSlice.reducer;
