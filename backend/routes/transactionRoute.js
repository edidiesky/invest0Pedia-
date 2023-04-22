import express from "express"
const router = express.Router()
import {
    GetTransactionById,
    GetAllTransaction,
    CreateTransaction,
    DeleteTransaction,
    AdminUpdateTransaction,
} from '../controllers/transactionController.js'
import {
    adminMiddleware,
    authMiddleware
} from '../middleware/authentication.js'


router.route('/').get(authMiddleware, adminMiddleware, GetAllTransaction)
.post(authMiddleware, CreateTransaction)


router.route('/:id').get(authMiddleware, GetTransactionById)
.delete(authMiddleware,adminMiddleware, DeleteTransaction)
.put(authMiddleware,adminMiddleware, AdminUpdateTransaction)
export default router


