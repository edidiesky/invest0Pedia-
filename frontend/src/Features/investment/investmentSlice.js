import { createSlice } from "@reduxjs/toolkit";

import {
  getinvestmentById,
  getAllinvestment,
  AdminUpdateInvestment,
    AdminDeleteInvestment,
    AdminCreateInvestment
} from "./investmentReducer";

const initialState = {
  isSuccess: false,
  isError: false,
  investment: [],
  investmentDetails:null,
  isLoading: false,
  showAlert: false,
  detailsAlert:false,
  alertText: "",
  alertType: "",
  investmentStats: null,
  isStatLoading: false,
  isStatError: false,
  isStatSuccess: false,
};

const investmentSlice = createSlice({
  name: "investment",
  initialState,
  reducers: {
    clearInvestmentAlert: (state, action) => {
      state.showAlert = false;
      state.alertText = "";
      state.alertType = "";
      state.isError = "";
      state.isSuccess = "";
      state.detailsAlert = false
    },
    getInvestmentDetails: (state, action) => {
      state.detailsAlert = true
      state.investmentDetails = action.payload;
    },
  },
  extraReducers: {
    // getting customers investment
    [getAllinvestment.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllinvestment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.investment = action.payload;
      state.showAlert = true;
      state.alertText = "All investment has been succesfully fetched";
      state.alertType = 'success';
    },
    [getAllinvestment.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isSuccess = false
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },
    

     // getting customers investment
     [AdminCreateInvestment.pending]: (state) => {
      state.isLoading = true;
    },
    [AdminCreateInvestment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.investment = action.payload;
      state.isSuccess = true
      state.showAlert = true;
      state.alertText = " investment has been succesfully created";
      state.alertType = 'success';
    },
    [AdminCreateInvestment.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isSuccess = false
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },


    // getting all customers investment
    [getinvestmentById.pending]: (state) => {
      state.isLoading = true;
    },
    [getinvestmentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.investmentDetails = action.payload;
    },
    [getinvestmentById.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },


     // getting all customers investment
    [AdminUpdateInvestment.pending]: (state) => {
      state.isLoading = true;
    },
    [AdminUpdateInvestment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.investment = action.payload;
      state.isSuccess = true
      state.alertText = 'Investment plan has been successfully updated';
      state.alertType = "success";
    },
    [AdminUpdateInvestment.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },

    // getting all customers investment
    [AdminDeleteInvestment.pending]: (state) => {
      state.isLoading = true;
    },
    [AdminDeleteInvestment.fulfilled]: (state, action) => {
      const investmentpayload = action.payload
      state.investment = state.investment.filter(x => x._id !== investmentpayload)

      state.alertText = `"${investmentpayload.plan}" has been successfully deleted`
      state.alertType = 'success'
      state.isLoading = false;
      state.showAlert = true;
    },
    [AdminDeleteInvestment.rejected]: (state, action) => {
      state.isLoading = false;
      state.showAlert = true;
      state.isError = true;
      state.alertText = action.payload;
      state.alertType = "danger";
    },


  },
});

export const { clearInvestmentAlert ,getInvestmentDetails} =
  investmentSlice.actions;

export default investmentSlice.reducer;
