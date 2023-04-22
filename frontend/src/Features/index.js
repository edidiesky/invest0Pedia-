import {
    onToggle,
    offToggle,
    toggleStorageTheme,
    onloader,
    offloader,
    ToggleSidebar,
    offSidebar,
    onSidebar
} from './toggle/toggleSlice'


import {
    onTaskModal,
    offTaskModal,
    ToggleTaskModal,
    onSearchModal,
    offSearchModal,
    ToggleSearchModal
} from './modal/modalSlice'


import {
    addCoinToCart,
    getCoinDetails
} from './coinCart/investedSlice'

import {
    CreateCoinCart,
    getAllCoinCart,
} from './coinCart/cartReducer'

import {
    clearUserAlertError,
    ClearUserInfo,
    saveShippingAddress,
    savePaymentType,
    ClearauthInfo,
    handleUserSearch,
    getUserPage,
    getUser,
} from './user/userSlice'

import {
    registerCustomer,
    loginCustomer,
    getAllCustomer,
    getSingleCustomer,
    adminUpdateCustomer,
    adminDeleteCustomer,
    UpdateProfile,
    getUserStats
} from './user/userReducer'

import {
    getinvestmentById,
    getAllinvestment,
    AdminUpdateInvestment,
    AdminDeleteInvestment,
    AdminCreateInvestment,
} from './investment/investmentReducer'


import {
    gettransactionById,
    getAlltransaction,
    createTransactionById,
    AdminUpdatetransaction,
} from './transaction/transactionReducer'
import {
    getAllMarket,
    AdminUpdateMarket,
} from "./market/marketReducer";

import {
    getInvestmentDetails,
    clearInvestmentAlert
} from './investment/investmentSlice'

import {
    AdminUpdateWallet,
    getWallet
} from './wallet/walletReducer'

import {
    clearWallertAlert
} from './wallet/walletSlice'


export {
    registerCustomer,
    loginCustomer,
    getAllCustomer,
    getSingleCustomer,
    adminUpdateCustomer,
    adminDeleteCustomer,
    UpdateProfile,
    getUserStats,
    clearUserAlertError,
    ClearUserInfo,
    savePaymentType,
    ClearauthInfo,
    handleUserSearch,
    getUser,
    onTaskModal,
    offTaskModal,
    ToggleTaskModal,
    onSearchModal,
    offSearchModal,
    ToggleSearchModal,
    onToggle,
    offToggle,
    toggleStorageTheme,
    onloader,
    offloader,
    ToggleSidebar,
    offSidebar,
    onSidebar,

    gettransactionById,
    getAlltransaction,
    createTransactionById,
    AdminUpdatetransaction,
    getinvestmentById,
    getAllinvestment,
    AdminUpdateInvestment,
    AdminDeleteInvestment,
    AdminCreateInvestment,

    addCoinToCart,
    getCoinDetails,
    CreateCoinCart,
    getAllCoinCart,
    getUserPage,

    getAllMarket,
    AdminUpdateMarket,
    getInvestmentDetails,
    clearInvestmentAlert,

    AdminUpdateWallet,
    getWallet,
    clearWallertAlert
}