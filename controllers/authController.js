
import User from "../models/User.js";
import { compareHash } from "../utils/encrypt.js";
import jwt from 'jsonwebtoken'

export async function login(req, res, next) {
    try {
        const currentUser = await User.findOne({ email: req.body.email })
        if (!currentUser) {
            res.status(404).json({msg: `Username does not exist`})
        } else {
            const isMatch = await compareHash(req.body.password, currentUser.password)

            if(isMatch) {
                const id = currentUser._id
                const email = currentUser.email
                const role = currentUser.role

                const token = jwt.sign({id,email, role }, process.env.JWT_SECRET, {expiresIn: "1d"})
                
                res.status(200).json(token)
            } else {
                res.status(401).json({msg: `Wrong password`})
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}