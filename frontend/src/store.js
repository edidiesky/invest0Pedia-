import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './Features/toggle/toggleSlice'

import modalSlice from './Features/modal/modalSlice'
import userSlice from './Features/user/userSlice'
import investmentSlice from './Features/investment/investmentSlice'
import transactionSlice from './Features/transaction/transactionSlice'

import coincartSlice from './Features/coinCart/investedSlice'
import marketSlice from './Features/market/marketSlice'

import walletSlice from './Features/wallet/walletSlice'
export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    modal: modalSlice,
    user: userSlice,
    investment: investmentSlice,
    transaction: transactionSlice,
    coincart: coincartSlice,
    market:marketSlice,
    wallet:walletSlice
  },
});
