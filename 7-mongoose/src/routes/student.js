const express = require('express');
const {getAllStudents, getStudentById, updateStudentById,deleteStudentById,addStudent } = require('../controllers/student')

const studentRouter =  express.Router();

studentRouter.get('', getAllStudents);
studentRouter.get('/:id',getStudentById);
studentRouter.put('/:id',updateStudentById);
studentRouter.delete('/:id', deleteStudentById);
studentRouter.post('',addStudent);

module.exports = studentRouter;