const Course = require('../models/course');
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
    const { id } = req.params;
    const student = await Student.findById(id).exec();
    if (!student) {
        return res.status(404).json({ error: "student not found" });
    }
    return res.json(student);
}

async function addStudent(req, res) {
    const { firstName, lastName, email } = req.body;
    // data validation
    const student = new Student({ firstName, lastName, email })
    await student.save();
    return res.status(201).json(student);
}

async function updateStudentById(req, res) {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    //without {new: true} 会返回更新前的结果
    const student = await Student.findByIdAndUpdate(id, { firstName, lastName, email }, { new: true }).exec();
    if (!student) {
        return res.status(404).json({ error: "student not found" });
    }
    return res.json(student);
}

// 删除学生的时候，可能很多课程和这个学生相关联，要找到所有课程并且update 

async function deleteStudentById(req, res) {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id).exec();
    if (!student) {
        return res.status(404).json({ error: "student not found" });
    }
    await Course.updateMany({ students: id }, { $pull: { students: id } }).exec();
    return res.sendStatus(204);
}


//负责把课程加到学生里面； 双边绑定
async function addStudentToCourse(req, res) {
    const { id, code } = req.params;
    //检测学生id course code是否存在
    const course = await Course.findById(code).exec();
    let student = await Student.findById(id).exec();
    if (!student || !course) {
        return res.status(404).json({ error: "student or course not found" });
    }
    // 找到学生，把course添加进去
    student = await Student.findByIdAndUpdate(
        id,
        { $push: { courses: code } },
        { new: true }
    ).exec();
    //找到课程，把学生加进去
    course.students.addToSet(id);
    await course.save();

    return res.json(student);
}

async function removeStudentFromCourse(req, res) {
    const { id, code } = req.params;
    //检测学生id course code是否存在
    const course = await Course.findById(code).exec();
    let student = await Student.findById(id).exec();
    if (!student || !course) {
        return res.status(404).json({ error: "student or course not found" });
    }
    // 找到学生，把course删掉
    student = await Student.findByIdAndUpdate(
        id,
        { $pull: { courses: code } },
        { new: true }
    ).exec();
    //找到课程，把学生删掉
    await Course.findByIdAndUpdate(code, { $pull: { students: id } }).exec();
    await course.save();

    return res.json(student);
}

module.exports = {
    getAllStudents,
    getStudentById,
    updateStudentById,
    addStudent,
    deleteStudentById,
    addStudentToCourse,
    removeStudentFromCourse
}
