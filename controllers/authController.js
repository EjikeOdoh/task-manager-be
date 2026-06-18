
import User from "../models/User.js";
import { compareHash } from "../utils/encrypt.js";

export async function login(req, res, next) {
    try {
        const currentUser = await User.findOne({ username: req.body.username })
        if (!currentUser) {
            res.status(404).json({msg: `Username does not exist`})
        } else {

            const isMatch = await compareHash(req.body.password, currentUser.password)

            if(isMatch) {
                res.status(200).json(currentUser)
            } else {
                res.status(401).json({msg: `Wrong password`})
            }
        }
        

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}