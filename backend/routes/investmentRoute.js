import express from "express"
const router = express.Router()
import {
    GetInvestmentById,
    GetAllInvestment,
    CreateInvestment,
    AdminUpdateInvestment,
    DeleteInvestment
} from '../controllers/investmentController.js'
import {
    adminMiddleware,
    authMiddleware
} from '../middleware/authentication.js'


router.route('/').get(authMiddleware, GetAllInvestment).post(authMiddleware,adminMiddleware, CreateInvestment)
router.route('/:id').get(authMiddleware, GetInvestmentById)
.delete(authMiddleware,adminMiddleware, DeleteInvestment).
put(authMiddleware,adminMiddleware, AdminUpdateInvestment)
export default router


