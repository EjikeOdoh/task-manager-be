import express from 'express';
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

// Get all users
router.get('/', getAllUsers);

// Get single user
router.get('/:id', getSingleUser);

// Create user
router.post('/', createUser);

// Update user
router.patch('/:id', updateUser);

// Delete user
router.delete('/:id', deleteUser);

export default router;