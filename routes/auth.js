import express from 'express'
import { createUser } from '../controllers/userController.js'
import { login } from '../controllers/authController.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', createUser)

export default router