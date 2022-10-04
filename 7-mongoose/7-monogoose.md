# 数据库设计 
## ER Diagram 
    * collection 名字 属性 
    * reference 
    * 设计好的表，通过图形的形式表示出来；

## 练习
* students
* teachers
* courses 
## Connection string
* Domain, 数据库的名字 

## student and course 双边绑定的时候
1. Schema层的绑定，在Model里面 
2. 接口层面的，可以在controller ->student里面 添加 
```js
//负责把课程加到学生里面； 双边绑定
async function addStudentToCourse(req,res){
    const {id, code} = req.params;
    //检测学生id course code是否存在
    const course = await Course.findById(code).exec();
    let student = await Student.findById(id).exec();
    if(!student || !course){
        return res.status(404).json({error:"student or course not found"});
    }
    // 找到学生，把course添加进去
    student = await Student.findByIdAndUpdate(
        id,
        {courses:{$push:code}},
        {new:true}
    ).exec();
    //找到课程，把学生加进去
    course.students.addToSet(id);
    await course.save();
    
    return res.json(student);
}
```
* 问题是：维护course相关的逻辑的时候，需要到student/controller去维护 

3. 也可以抽离到service层级，分别在student course里面添加 
    - 所有和这个resources相关的都放在当前资源下，
    - 检测学生是否存在，应该在student、service里面
    - 检测course是否存在，应该在service - course里面 
    - 如果有service层的话，可能会合并 controller and router ; 因为controller只是从params取数据，有些多余；逻辑都在service层面处理
```js
// 需要ts injection等
class CourseService{
    addStudentToCourse(){

    }
}
```
    - 简单的service
```js
const Course = require('../models/course');

async function addStudentToCourse(studentId, courseId){
    const course = await Course.findByIdAndUpdate(courseId,{
        student:{$push: studentId}},
         {new: true}
    );
    if(!course){
        throw new Error('course not found');
    }
    return course;
}

module.export = {
    addStudentToCourse,
}
```

### 怎么删除课程和学生的关联(controller)
### 删除课程的时候，学生那边关联的课程reference 如何处理？
* 删除resources之前，确保关联删除干净~

## middleware 实现，对所有middleware function都做一层判断
* 对每个route handler都做try and catch 的处理
* 把 tryCatch写成单独的函数 
- 在controller > student.js里面 
```js
// curring function 
// high order function 高阶函数；前端比较常见； 
//得到的一个参数，是一个函数，传入的函数有很多自己复杂逻辑； 
function tryCatch(routeHandler){
    //对所有的route handler都做try catch处理，
    //问题：req res 从哪里来？
    return async (req,res,next) =>{
        try{
            await routeHandler(req,res,next);
         } catch(e) {
             res.json(e);
             //next(e);
         }
    }   
}
```
- 在routes > student.js里面
- 可以在route handler外面包裹tryCatch;这样就不需要在每个页面外面去做 try catch啦

```js
const express = require('express');
const {getAllStudents, getStudentById, updateStudentById,deleteStudentById,addStudent, addStudentToCourse, removeStudentFromCourse,tryCatch } = require('../controllers/student')

const studentRouter =  express.Router();

studentRouter.get('', getAllStudents);
studentRouter.get('/:id',getStudentById);
studentRouter.put('/:id',updateStudentById);
studentRouter.delete('/:id', deleteStudentById);
studentRouter.post('',tryCatch(addStudent)); // 不需要每个controller 函数里面做try catch判断 
studentRouter.post('/:id/courses/:code', addStudentToCourse);
studentRouter.delete('/:id/courses/:code', removeStudentFromCourse);
module.exports = studentRouter;
```

## package -> express async errors library
* try catch注入到了express的框架里面； 需要对express的代码进行相应的改变 
* https://www.npmjs.com/package/express-async-errors

## error handler
* 可以像route一样做一个index.js 

* 自定义错误类型
```js
//自定义的error 
//next(new CustomError(''))

next(new CustomError(''));
//自定义的error可以继承error
class CustomError extends Error{

}
//如果error是自定义error的话，可以做一些逻辑处理
if(error instanceof CustomError){

}
```

## Validation 
- 在schema里面做validate 
- Mongoose的验证，只有在save的时候才做验证； 比如 findByIdAndUpdate ->是不做数据的validate的 
- 下面例子是在Mongoose里面做的数据验证 
```js
email:{
        type: String,
        required: true,
        validate:{
            validator:(email) =>{
                // regex
                // Joi
                // validator.js 
                // express-validator
                // const valudation = Joi.string().email().validate(email);
                // const {error} = valudation;
                // if(error){
                //     return false;
                // }
                // return true;
                //如果返回true 验证成功； error有值代表false，所有 ！
                return !Joi.string().email().validate(email).error;
            },
            msg:'Invalid email format',
        }
    },

```
* 后端永远都要做数据验证 
    - 尽管前端做了邮件验证，但是永远不要相信请求发过来的数据
    - 黑客通过postman发送模拟请求，数据不安全 
    - 不要相信前端（接口）发送过来的任何数据
* 在Mongoose外部，创建document之前做好数据验证 
    - courseCode验证 
    - 取到body里面的数据之后，是要做数据验证的；