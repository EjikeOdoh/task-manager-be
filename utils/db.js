
import mongoose from 'mongoose'

export default async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "student_manager"
        })
        console.log(`Database connected`)
    } catch (error) {
        console.log(error)
    }
}

