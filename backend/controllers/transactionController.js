import moment from 'moment'
import asyncHandler from 'express-async-handler'
import Transaction from '../models/Transaction.js'
import CoinCart from '../models/CoinCart.js'

//PRIVATE/ADMIN
const GetTransactionById = asyncHandler(async (req, res) => {
    // 
    const transaction = await Transaction.find({createdBy:req.user.userId}).populate('createdBy', 'firstname email country')
    res.status(200).json({transaction })
}
)

//PRIVATE/ADMIN
const CreateTransaction = asyncHandler(async (req, res) => {
    // get the investment item
    const { userId } = req.user
    const { transactionItems, createdBy } = req.body
    const transaction = await Transaction.create({ transactionItems, createdBy: userId })
    res.status(200).json({ transaction })
}
)

//PRIVATE/ADMIN
const AdminUpdateTransaction = asyncHandler(async (req, res) => {
    const {id} = req.params
    // find the transaction
    const transaction = await Transaction.findById({_id:id})
    if (!transaction) {
        throw new Error('No such transaction has been found')
    }
    // update the transaction
    const updatedTransaction = await Transaction.findByIdAndUpdate({_id:id}, req.body, {new:true})

    res.status(200).json({updatedTransaction})
}
)
//PRIVATE/ADMIN
const DeleteTransaction = asyncHandler(async (req, res) => {
    const {id} = req.params
    // find the transaction
    const transaction = await Transaction.findById({_id:id})
    if (!transaction) {
        throw new Error('No such transaction has     been found')
    }
    // update the transaction
    await transaction.remove()
    res.status(200).json({msg:'Transaction has been sucessfully deleted'})
}
)



// PRIVATE/ADMIN
const GetAllTransaction = asyncHandler(async (req, res) => {
     // 
     const transaction = await Transaction.find({}).populate('createdBy', 'firstname email country')
     res.status(200).json({transaction })
}
)

// // PRIVATE/ADMIN
// const AggregateTransactionStats = asyncHandler(async (req, res) => {
//     let usersStats = await Transaction.aggregate([
//         // match the users to nothing
//         { $match: {} },
//         // group based on year and month
//         {
//             $group: {

//                 _id: {
//                     year: {
//                         $year: '$createdAt'
//                     },
//                     month: {
//                         $month: '$createdAt'
//                     }
//                 },
//                 count: { $sum: 1 }
//             }
//         },
//         { $sort: { '_id.year': -1, '_id.month': -1 } },
//         { $limit: 8 }
//     ])


//     // modify the stats
//     usersStats = usersStats.map(stats => {
//         const { _id: { year, month }, count } = stats
//         const date = moment().month(month - 1).year(year).format('MMM Y')

//         return { date, count }
//     })

//     res.status(200).json({ usersStats })
// }
// )



export {
    GetTransactionById,
    GetAllTransaction,
    CreateTransaction,
    DeleteTransaction,
    AdminUpdateTransaction,
}
