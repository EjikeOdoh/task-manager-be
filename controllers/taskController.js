import Task from '../models/Task.js'
import jwt from 'jsonwebtoken'

export async function getAllTasks(req, res, next) {
    try {
        const id = req.user.id
        const role = req.user.role
        if (role === "admin") {
            const tasks = await Task.find()
            res.status(200).json(tasks)
        } else {
            const tasks = await Task.find({ userId: id })
            res.status(200).json(tasks)
        }


    } catch (error) {
        res.status(500).json({ msg: 'Error getting all tasks' })
    }
}

export async function getSingleTask(req, res, next) {

    try {
        const task = await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({ msg: 'Error getting single task' })
    }
}

export async function createTask(req, res, next) {
    try {
        const id = req.user.id
        const task = new Task({ ...req.body, userId: id })
        await task.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export async function updateTask(req, res, next) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!task) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json(task)
    } catch (error) {
        res.status(500).json({ msg: 'Error updating task' })
    }
}

export async function deleteTask(req, res, next) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json({ message: 'Task deleted successfully' })
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting task' })
    }
}