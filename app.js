import express from 'express'

// Imports for routes
import tasksRouter from './routes/task.js'
import usersRouter from './routes/user.js'
import connectToDatabase from './utils/db.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/tasks', tasksRouter)
app.use('/users', usersRouter)

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