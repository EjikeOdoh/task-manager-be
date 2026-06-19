import express from 'express'
import { createUser } from '../controllers/userController.js'
import { login, getProfile } from '../controllers/authController.js'
import { getPayloadFromToken } from '../middleware/auth.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', createUser)
router.get('/profile',getPayloadFromToken, getProfile)

export default router