const express = require('express');
const { getAllTasks, getTaskById, updateTaskById, deleteTaskByID, addTask } = require('../controllers/task');
const taskRouter = express.Router();

taskRouter.get('',getAllTasks);
taskRouter.get('/:id',getTaskById);
taskRouter.post('',addTask);
taskRouter.put('/:id', updateTaskById);
taskRouter.delete('/:id',deleteTaskByID);

module.exports = taskRouter;