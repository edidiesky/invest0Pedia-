import express from "express"
const router = express.Router()
import {
    GetAllWallet,
    CreateWallet,
    DeleteWallet,
    AdminUpdateWallet,
} from '../controllers/WalletController.js'
import {
    adminMiddleware,
    authMiddleware
} from '../middleware/authentication.js'


router.route('/').get(authMiddleware, adminMiddleware, GetAllWallet)
.post(authMiddleware,adminMiddleware, CreateWallet)


router.route('/:id')
.delete(authMiddleware,adminMiddleware, DeleteWallet)
.put(authMiddleware,adminMiddleware, AdminUpdateWallet)
export default router


