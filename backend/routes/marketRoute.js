import express from "express"
const router = express.Router()
import {
    GetAllMarket,
    CreateMarket,
    DeleteMarket,
    AdminUpdateMarket,
} from '../controllers/marketController.js'
import {
    adminMiddleware,
    authMiddleware
} from '../middleware/authentication.js'


router.route('/').get(authMiddleware, adminMiddleware, GetAllMarket)
.post(authMiddleware,adminMiddleware, CreateMarket)


router.route('/:id')
.delete(authMiddleware,adminMiddleware, DeleteMarket)
.put(authMiddleware,adminMiddleware, AdminUpdateMarket)
export default router


