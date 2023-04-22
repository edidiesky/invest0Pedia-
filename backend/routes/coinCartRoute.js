import express from "express"
const router = express.Router()
import {
    GetCoinCartById,
    GetAllCoinCart,
    CreateCoinCart,
} from '../controllers/coinCartController.js'
import {
    authMiddleware
} from '../middleware/authentication.js'


router.route('/').get(authMiddleware, GetAllCoinCart)
router.route('/').post(authMiddleware, CreateCoinCart)
router.route('/:id').get(authMiddleware, GetCoinCartById)
export default router


