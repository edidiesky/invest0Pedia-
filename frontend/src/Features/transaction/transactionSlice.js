import { createSlice } from "@reduxjs/toolkit";

import {
  gettransactionById,
  getAlltransaction,
  createTransactionById,
  AdminUpdatetransaction
} from "./transactionReducer";

const initialState = {
  isSuccess: false,
  isError: false,
  transaction: null,
  trsanctionDetails:{},
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  transactionStats: null,
  isStatLoading: false,
  isStatError: false,
  isStatSuccess: false,
  transactionpage: 1,
  transactionnoOfpage: 0,
  totaltransaction: 0,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
    },
    transactionPayReset: (state, action) => {
      state.loadingPay = false;
      state.successPay = false;
    },
    transactionDelieveredReset: (state, action) => {
      state.loadingdelivered = false;
      state.successdelivered = false;
    },
    getOrderPage: (state, action) => {
      state.transactionpage = action.payload;
    },
  },
  extraReducers: {
    // getting customers transaction
    [getAlltransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [getAlltransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transaction = action.payload;
    },
    [getAlltransaction.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    // getting customers transaction stats
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


    // getting all customers transaction
    [gettransactionById.pending]: (state) => {
      state.isLoading = true;
    },
    [gettransactionById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transaction = action.payload;
    },
    [gettransactionById.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting all customers transaction
    [createTransactionById.pending]: (state) => {
      state.isLoading = true;
    },
    [createTransactionById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transaction = action.payload;
    },
    [createTransactionById.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },


     // getting all customers transaction
    [AdminUpdatetransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [AdminUpdatetransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transaction = action.payload;
      state.showAlert = true;
      state.alertText = 'Transaction has been succesfully updated';
      state.alertType = "sucess";
    },
    [AdminUpdatetransaction.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    
  },
});

// console.log(transactionSlice);
export const { clearAlert, transactionPayReset, transactionDelieveredReset, getOrderPage } =
  transactionSlice.actions;

export default transactionSlice.reducer;
