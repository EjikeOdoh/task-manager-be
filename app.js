import express from 'express'

// Imports for routes
import tasksRouter from './routes/task.js'
import usersRouter from './routes/user.js'
import authRouter from './routes/auth.js'

// Database
import connectToDatabase from './utils/db.js'
import { getPayloadFromToken, onlyAllowAdmin } from './middleware/auth.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/tasks', getPayloadFromToken, tasksRouter)
app.use('/users',getPayloadFromToken, onlyAllowAdmin, usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res, next) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Web server is live on port ${port}`)
})

async function connect() {
    try {
        await connectToDatabase()
    } catch (error) {
        console.log(error)
    }
}

connect()