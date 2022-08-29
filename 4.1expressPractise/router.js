const express = require('express');
// const app = express();
const router = express.Router();

// 数据缓存
const tasks = [];
let id = 1;
// app.get('/',(req,res) =>{
//     res.send('Hello,Hello,world');
// });
const cors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // * 允许所有的method
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};
router.use(cors);

// post/tasks create a new task
router.post('/tasks', (req, res) => {
    const {description, done} = req.body;
    tasks.push({id, description, done})
    id++;
    res.status(201).send(tasks[tasks.length - 1]); // 只能返回当前创建的值
});

//get all tasks
/**
 * use array.filter() -> need to decide when to filter, when not
 * Filter里面的逻辑用 string.includes('')-> return true / false.
 * */
router.get('/tasks', (req, res) => {
    //console.log(req.query.description)
    const {description} = req.query;
    console.log(`description:${description}`);
    if (description === undefined) {
        res.status(200).send(tasks);
    } else {
        if(description){
            const targetArray = tasks.filter(x => x.description.includes(description));
            console.log(`targetArray: ${targetArray}`);
            res.status(200).json(targetArray);
        }
    }
});


// get a specific task through task ID.
/**
 * Tasks.filter() will return an array []. Instead of json file.
 * */
router.get('/tasks/:id', (req, res) => {
    const {id} = req.params;
    console.log(req.params)
    const idInt = parseInt(id);
    const existingTask = tasks.find( x =>{ return x.id === idInt})
    console.log(existingTask);
    if (existingTask) {
        res.status(200).send(existingTask);
    } else {
        res.status(404).send('Task not found');
    }
});

// update a task
router.put('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const idIndex = parseInt(id);
    for (let task of tasks) {
        if (task.id === idIndex) {
            task.description = req.body.description;
            task.done = req.body.done;
            res.status(200).send(task);
            return;
        }
    }
    res.status(404).send('Task not found');
});

// delete
router.delete('/tasks/:id', (req, res) => {
    // id -> string
    // ==== (number ==== string) -> false.
    // array.find()
    const id = parseInt(req.params.id);
    // console.log(req.params.id);
    // console.log(id);
    for (let task of tasks) {
        if (task.id === id) {
            const remove = tasks.findIndex(x => x.id === id);
            tasks.splice(remove, 1);
            res.status(204).send("The task successfully deleted");
            return;
        }
    }
    res.status(404).send('Task not Found');
});


module.exports = {router};



