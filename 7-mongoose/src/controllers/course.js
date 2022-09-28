const Course = require('../models/course');

//获取数据是从module获取的
async function getAllCourses(req, res) {

    const query = Course.find();
    if (process.env.NODE_ENV == 'production') {
        // 学习query可以串联，但是
        query.select('code name description');
    }
    const courses = await query.exec();
    return res.json(courses);
}

async function getCourseById(req, res) {
    const {id} = req.params;
    const course = await Course.findById(id).exec();
    if (!course) {
        return res.status(404).json({error: "student not found"});
    }
    return res.json(course);
}

async function addCourse(req, res) {
    const {code, name, description} = req.body;
    // if the course already exist,no further add action.
    const existingCourse = await Course.findById(code).exec();
    if(existingCourse){
        return res.status(409).json({error:'duplicate course code'});
    }
    const course = new Course({code, name, description});
    await course.save();
    return res.status(201).json(course);
}

async function updateCourseById(req, res) {
    const {id} = req.params;
    const {code, name, description} = req.body;
    //without {new: true} 会返回更新前的结果
    const course = await Course.findByIdAndUpdate(id, {name, description}, {new: true}).exec();
    if (!course) {
        return res.status(404).json({error: "student not found"});
    }
    return res.json(course);
}

async function deleteCourseById(req, res) {
    const {id} = req.params;
    const course = await Course.findByIdAndDelete(id).exec();
    if (!course) {
        return res.status(404).json({error: "student not found"});
    }
    return res.sendStatus(204);
}

module.exports = {
    getAllCourses,
    getCourseById,
    updateCourseById,
    addCourse,
    deleteCourseById
}
