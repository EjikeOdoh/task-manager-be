import express from 'express'
import { createTask, deleteTask, getAllTasks, getSingleTask, updateTask } from '../controllers/taskController.js'

const router = express.Router()

// Get all tasks
router.get('/', getAllTasks)

// Get single task
router.get('/:id', getSingleTask )

// Create task
router.post('/', createTask)

// Update task
router.patch('/:id', updateTask)

//Delete task
router.delete('/:id', deleteTask)

export default router

