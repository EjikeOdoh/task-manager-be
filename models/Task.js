import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['home', 'office', 'social'],
        default: 'home',
        required: true
    },
    dueDate: Date,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})


const Task = mongoose.model('Task', taskSchema)

export default Task

