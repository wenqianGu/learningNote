const Student = require('../models/student');

//获取数据是从module获取的
async function getAllStudents(req,res){
    // db.students.find()
    // query
    // query chain
const students = await Student.find().exec();
return res.json(students);
/**
 * 返回数据，要有一致的格式 
 * {
 *  data:[],
 * error:"",
 * message:""
 * 
 * return res.json({data:students});
 * 
 * }
 * 
 */

}

function getStudentById(req,res){

}

function addStudent(req,res){

}

function updataStudentById(req,res){

}

function deleteStudentById(req,res){

}

module.exports = {
    getAllStudents,
    getStudentById,
    updataStudentById,
    addStudent,
    deleteStudentById
}
