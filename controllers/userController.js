import User from '../models/User.js'

export async function getAllUsers(req, res, next) {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ msg: 'Error getting all users' })
    }
}

export async function getSingleUser(req, res, next) {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            res.status(404).json({ msg: "User not found" })
        } else {
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).json({ msg: 'Error getting single user' })
    }
}

export async function createUser(req, res, next) {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: error.message })
    }
}

export function updateUser(req, res, next) {
    res.send(`Update a user`)
}

export function deleteUser(req, res, next) {
    res.send(`Delete a user`)
}