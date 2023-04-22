import moment from 'moment'
import asyncHandler from 'express-async-handler'
import CoinCart from '../models/CoinCart.js'
import User from '../models/User.js'

//PRIVATE/ADMIN
const GetCoinCartById = asyncHandler(async (req, res) => {
    // reduce the user deposited amount
    // calculate each percentage, estimatedTax
    res.status(200).json({ msg: 'GetCoinCartById' })
}
)

//PRIVATE/ADMIN
const CreateCoinCart = asyncHandler(async (req, res) => {
    // get the investment item
    const { userId } = req.user
    const { tier, plan, price, rate, image, startDate, endDate, tax, deposit, createdBy } = req.body

    // get the user deposit
    // create user transactions
    const transaction = await CoinCart.create({
        tier,
        plan,
        price,
        image,
        startDate,
        endDate,
        tax,
        deposit,
        rate,
        createdBy:userId
    })
    // find the user
    const user = await User.findById({ _id: userId })
    if (!user) {
        throw new Error('No investment has been created')
    }
    // reduce the user deposited amount based on the investment price
    await User.updateOne({ _id: userId }, { deposit: user.deposit - price }, { new: true })
    res.status(200).json({ transaction })
}
)

// PRIVATE/ADMIN
const GetAllCoinCart = asyncHandler(async (req, res) => {
    const {userId} = req.user
    // get all coin cart
    const coincart = await CoinCart.find({createdBy:userId})

    res.status(200).json({ coincart })
}
)



export {
    GetCoinCartById,
    GetAllCoinCart,
    CreateCoinCart,
}
