const express = require('express');
const app = express();
app.use(express.json());

//app.use(cors())
const cors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // * 允许所有的method
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};
app.use(cors);

// 数据缓存
const tasks = [];
let id = 1;
// app.get('/',(req,res) =>{
//     res.send('Hello,Hello,world');
// });

// post/tasks create a new task
app.post('/tasks', (req, res) => {
    const { description, done } = req.body;
    tasks.push({ id, description, done })
    id++;
    res.status(201).send(tasks[tasks.length - 1]); // 只能返回当前创建的值
});

//get all tasks
/**
 * use array.filter() -> need to decide when to filter, when not
 * Filter里面的逻辑用 string.includes('')-> return true / false.
 * */
app.get('/tasks', (req, res) => {
    const { description } = req.query;
    if (description === undefined) {
        res.status(200).send(tasks);
    } else {
        if (description) {
            const filterTasks = tasks.filter(x => x.description.includes(description));
            console.log(`targetArray: ${filterTasks}`);
            // res.status(200).json(filterTasks); 默认返回就是200 不需要status(200)
            res.json(filterTasks)
        }
    }
});


// get a specific task through task ID.
/**
 * Tasks.filter() will return an array []. Instead of json file.
 * */
app.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(x => { return x.id === Number(id) })
    if (!task) {
        res.status(404).send('Task not found');
        return;
    }
    res.status(200).send(task);
});

// update a task
app.put('/tasks/:id', (req, res) => {
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
});

// delete
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(i => i.id === Number(id))
    if (index === -1) {
        res.status(400).json({ error: 'Task not found' });
        return;
    }
    tasks.splice(index, 1);
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('server listening');
});



