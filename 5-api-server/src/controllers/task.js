const tasks = [];
class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.done = false;
    }
}

let id = 1

const getAllTasks = (req, res) => {
    const { description } = req.query;
    if (description) {
        const filterTasks = tasks.filter(x => x.description.includes(description));
        // res.status(200).json(filterTasks); 默认返回就是200 不需要status(200)
        res.json(filterTasks)
        return
    }
    res.json(tasks)
    return;
}

const getTaskById = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(x => { return x.id === Number(id) })
    if (!task) {
        res.status(404).send('Task not found');
        return;
    }
    res.status(200).send(task);
}

const addTask = (req, res) => {
    const { description } = req.body;
    const task = new Task(id++, description);
    tasks.push(task)
    res.status(201).json(task); // 只能返回当前创建的值
    return
}

const updateTaskById = (req, res) => {
    const { id } = req.params;
    const { description, done } = req.body; //尽量把所有变量声明放在最上面
    const idIndex = Number(id);
    const task = tasks.find(e => e.id === idIndex)
    if (!task) {
        res.status(404).send('Task not found');
        return;
    }
    // req.body = {description:'XXX'} ; done 不需要改;单获取到的是string 
    // !!done ->数据类型转换为boolean

    if (description) {
        task.description = description;
    }
    if (done) {
        task.done = !!done; // 转换string到boolean 
    }
    res.json(task);
    return;
}

const deleteTaskByID = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(i => i.id === Number(id))
    if (index === -1) {
        res.status(400).json({ error: 'Task not found' });
        return;
    }
    tasks.splice(index, 1);
    res.sendStatus(204);
}

module.exports = {
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskByID,
    addTask,
}