import moment from 'moment'
import asyncHandler from 'express-async-handler'
import Market from '../models/Market.js'
import CoinCart from '../models/CoinCart.js'


//PRIVATE/ADMIN
const CreateMarket = asyncHandler(async (req, res) => {
    // get the investment item
    const { userId } = req.user
    const { price,profit,rate,volume,capacity, createdBy } = req.body
    const market = await Market.create({ price,profit,rate,volume,capacity, createdBy: userId })
    res.status(200).json({ market })
}
)

//PRIVATE/ADMIN
const AdminUpdateMarket = asyncHandler(async (req, res) => {
    const {id} = req.params
    // find the market
    const market = await Market.findById({_id:id})
    if (!market) {
        throw new Error('No such market has been found')
    }
    // update the market
    const updatedMarket = await Market.findByIdAndUpdate({_id:id}, req.body, {new:true})

    res.status(200).json({updatedMarket})
}
)
//PRIVATE/ADMIN
const DeleteMarket = asyncHandler(async (req, res) => {
    const {id} = req.params
    // find the market
    const market = await Market.findById({_id:id})
    if (!market) {
        throw new Error('No such market has been found')
    }
    // update the market
    const updatedMarket = await Market.findByIdAndDelete({_id:id}, req.body, {new:true})

    res.status(200).json({msg:'Market has been sucessfully deleted'})
}
)

// PRIVATE/ADMIN
const GetAllMarket = asyncHandler(async (req, res) => {
     // 
     const market = await Market.find({})
     res.status(200).json({market })
}
)



export {
    GetAllMarket,
    CreateMarket,
    DeleteMarket,
    AdminUpdateMarket,
}
