
const tasks = [
    {
        title: "Task 1",
        description: "This is the first task"
    }
]

export function getAllTasks(req, res, next) {
    res.json(tasks)
}

export function getSingleTask(req, res, next) {
    res.send(`Get single`)
}

export function createTask(req, res, next) {
    res.send(`Create new task`)
}

export function updateTask(req, res, next) {
    res.send(`Update a task`)
}

export function deleteTask(req, res, next) {
    res.send(`Delete a task`)
}