import moment from 'moment'
import asyncHandler from 'express-async-handler'
import Wallet from '../models/Wallet.js'
import CoinCart from '../models/CoinCart.js'


//PRIVATE/ADMIN
const CreateWallet = asyncHandler(async (req, res) => {
    // get the investment item
    const { userId } = req.user
    const { createdBy, address } = req.body
    const wallet = await Wallet.create({...req.body,createdBy: userId })
    res.status(200).json({ wallet })
}
)

//PRIVATE/ADMIN
const AdminUpdateWallet = asyncHandler(async (req, res) => {
    const {id} = req.params
    // find the Wallet
    const wallet = await Wallet.findById({_id:id})
    if (!wallet) {
        throw new Error('No such Wallet has been found')
    }
    // update the Wallet
    const updatedWallet = await Wallet.findByIdAndUpdate({_id:id}, req.body, {new:true})

    res.status(200).json({updatedWallet})
}
)
//PRIVATE/ADMIN
const DeleteWallet = asyncHandler(async (req, res) => {
    const {id} = req.params
    // find the Wallet
    const wallet = await Wallet.findById({_id:id})
    if (!wallet) {
        throw new Error('No such Wallet has been found')
    }
    // update the Wallet
    const updatedWallet = await Wallet.findByIdAndDelete({_id:id}, req.body, {new:true})

    res.status(200).json({msg:'Wallet has been sucessfully deleted'})
}
)

// PRIVATE/ADMIN
const GetAllWallet = asyncHandler(async (req, res) => {
     // 
     const wallet = await Wallet.find({})
     res.status(200).json({wallet })
}
)



export {
    GetAllWallet,
    CreateWallet,
    DeleteWallet,
    AdminUpdateWallet,
}
