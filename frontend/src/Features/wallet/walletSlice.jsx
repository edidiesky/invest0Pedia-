import { createSlice } from "@reduxjs/toolkit";

import {
  getWallet,
  createWalletById,
  AdminUpdateWallet
} from "./walletReducer";

const initialState = {
  isSuccess: false,
  isError: false,
  Wallet: null,
  trsanctionDetails:{},
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const WalletSlice = createSlice({
  name: "Wallet",
  initialState,
  reducers: {
    clearWallertAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.isSuccess = false
    },
  },
  extraReducers: {
    // getting customers Wallet
    // getting all customers Wallet
    [getWallet.pending]: (state) => {
      state.isLoading = true;
    },
    [getWallet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Wallet = action.payload;
    },
    [getWallet.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true; 
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting all customers Wallet
    [createWalletById.pending]: (state) => {
      state.isLoading = true;
    },
    [createWalletById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Wallet = action.payload;
    },
    [createWalletById.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },


     // getting all customers Wallet
    [AdminUpdateWallet.pending]: (state) => {
      state.isLoading = true;
    },
    [AdminUpdateWallet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.Wallet = action.payload;
      state.showAlert = true;
      state.alertText = 'Wallet has been succesfully updated';
      state.alertType = "success";
    },
    [AdminUpdateWallet.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    
  },
});

// console.log(WalletSlice);
export const { clearWallertAlert, WalletPayReset, WalletDelieveredReset, getOrderPage } =
  WalletSlice.actions;

export default WalletSlice.reducer;
