const Student = require('../models/student');

//获取数据是从module获取的
async function getAllStudents(req, res) {
    // db.students.find()
    // query
    // query chain
    // const students = await Student.find().select('firstName, lastName').exec();
    const query = Student.find();
    if (process.env.NODE_ENV == 'production') {
        // 学习query可以串联，但是
        query.select('fistName lastName');
    }
    const students = await query.exec();

    return res.json(students);
    /**
     * 返回数据，要有一致的格式
     * {
     *  data:[],
     * error:"",
     * message:""
     * return res.json({data:students});
     * }
     */

}

async function getStudentById(req, res) {
    const {id} = req.params;
    const student = await Student.findById(id).exec();
    if (!student) {
        return res.status(404).json({error: "student not found"});
    }
    return res.json(student);
}

async function addStudent(req, res) {
    const {firstName, lastName, email} = req.body;
// data validation
    const student = new Student({firstName, lastName, email})
    await student.save();
    return res.status(201).json(student);
}

async function updateStudentById(req, res) {
    const {id} = req.params;
    const {firstName, lastName, email} = req.body;
    //without {new: true} 会返回更新前的结果
    const student = await Student.findByIdAndUpdate(id, {firstName, lastName, email}, {new: true}).exec();
    if (!student) {
        return res.status(404).json({error: "student not found"});
    }
    return res.json(student);
}

async function deleteStudentById(req, res) {
    const {id} = req.params;
    const student = await Student.findByIdAndDelete(id).exec();
    if (!student) {
        return res.status(404).json({error: "student not found"});
    }
    return res.sendStatus(204);
}

module.exports = {
    getAllStudents,
    getStudentById,
    updateStudentById,
    addStudent,
    deleteStudentById
}
