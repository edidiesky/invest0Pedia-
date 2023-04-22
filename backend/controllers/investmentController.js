import moment from 'moment'
import asyncHandler from 'express-async-handler'
import Investment from '../models/Investment.js'

//PRIVATE/ADMIN
const GetInvestmentById = asyncHandler(async (req, res) => {
    // get the investment id
    const { id } = req.params
    // find based on the id
    const investment = await Investment.findById({ _id: id })
    // cehck for existence  
    if (!investment) {
        throw new Error('No investment has been created')
    }
    // send the data
    res.status(200).json({ investment })

}
)

// //PRIVATE/ADMIN
const CreateInvestment = asyncHandler(async (req, res) => {
    const { userId } = req.user
    const {createdBy } = req.body
    const investment = await Investment.create({ ...req.body, createdBy: userId })
    res.status(200).json({ investment })
}
)

// //PRIVATE/ADMIN
const AdminUpdateInvestment = asyncHandler(async (req, res) => {
    const {id} = req.params
    // find the investment
    const investment = await Investment.findById({_id:id})
    if (!investment) {
        throw new Error('No such investment has been found')
    }
    // update the investment
    const updatedInvestment = await Investment.findByIdAndUpdate({_id:id}, req.body, {new:true})

    res.status(200).json({updatedInvestment})
}
)
//PRIVATE/ADMIN
const DeleteInvestment = asyncHandler(async (req, res) => {
    const {id} = req.params
    // find the investment
    const investment = await Investment.findById({_id:id})
    if (!investment) {
        throw new Error('No such investment has been found')
    }
    // update the investment
   await investment.remove()

   res.status(200).json({message:'Deleted sucessfully'})


}
)



// PRIVATE/ADMIN
const GetAllInvestment = asyncHandler(async (req, res) => {
    // find all investment
    const investment = await Investment.find({})
    // check for investment existence
    if (!investment) {
        throw new Error('No investment has been created')   
    }
    res.status(200).json({ investment })
}
)

// // PRIVATE/ADMIN
// const AggregateInvestmentStats = asyncHandler(async (req, res) => {
//     let usersStats = await Investment.aggregate([
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
    GetInvestmentById,
    GetAllInvestment,
    CreateInvestment,
    AdminUpdateInvestment,
    DeleteInvestment
}
