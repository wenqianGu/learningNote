const express = require('express');
const { getAllTasks, getTaskById, updateTaskById, deleteTaskByID, addTask } = require('../controllers/task');
const taskRouter = express.Router();

taskRouter.get('/tasks',getAllTasks);
taskRouter.get('/tasks/:id',getTaskById);
taskRouter.post('/tasks',addTask);
taskRouter.put('/tasks/:id', updateTaskById);
taskRouter.delete('/tasks/:id',deleteTaskByID);

module.exports = taskRouter;