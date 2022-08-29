const express =require('express');

/**
 * 为什么加 () ? 因为是json是一个普通函数，会返回一个middleware function，
 * 需要把执行json（），得到这个middleware function， 传给app.use
 * json是一个function， 执行后，会返回另外一个function
 * json: () =>{
 *     // high-order function
 *     // curring function
 *   return (req,res,next) =>{
 *   }
 * }
 *
 * */
const app = express();
app.use(express.json()); // 为什么加 () ? 因为是json是一个普通函数，会返回一个middleware function，
                        // 需要把执行json（），得到这个middleware function， 传给app.use
// body-parser
// 4.xxx -> body-parser included in express.
app.get('/',(req,res) =>{
    res.send('Hello, world！！！！！');
});
app.post('/:id',(req,res) =>{
const {name} =req.body;
const {title} =req.query;
const {id} = req.params;
res.send({name,title,id});

})

// error middleware 是否会用到req里面的值？
//后面的middleware不用带着token去取用户数据了；
// middleware 可以db有链接
// middleware 就是一些函数，把复用的逻辑抽出来放到这些函数里面
const authGuard = (req,res,next) => {
    // get token from request header
    // extract user info from token or from db
    //到这里，我们通过req或者数据库获取到了用户的信息，然后复制给req，这样后面处理的时候，就可以直接获取用户信息
    req.user = userInfo; // 新添加user信息到req里面； 这些数据可能在error M里面取出来，做更详细的日志
    next();
}

const m1 = (req,res,next) =>{
    // if token not exist{
    // res.json({error:"token not found"});
    // 像上面这样直接返回 OR -> 如果要进入 -> errorMiddleware
    // next(xxxx); xxxx can be string, can be object {type:xxx, message:xxxx}, can be new Error('');
    // 或者 next(new Error('error'));
    // return;
    // };
    // if token exist, call next();
    next();
}

const errorM1 = (error, req, res,next) => {
    // 通用的error -> 如果error是用Library的话，检查 class的声明；
    if(error.type === 'validationError'){ // error 是一个object
        res.status(400).json({error:error.message});
        return; // 如果是当前的error的话，直接返回
    };
    //如果是我们自己的写的error
    if(error instanceof CustomError){ //检测error是不是customError的一个实例，-> new CustomError or new 一个继承与Cutomer Error的实例。这里是true
        res.status(400).json({error:error.message}); // 如果是自定义的error的话，直接抛出错误
    }
    next(error); // 如果不是当前的error的话，传递给下一个error middleware。
}
//last Error Middleware
//记录error到db的错误日志里面 ->终止error的处理流程
const errorHandler = (err,req,res,next) => {
    console.log(err); // logging lib ->db -> log -> logging platform
    res.status(500).json({error:"please try later"});
}



// next(new CustomError('')); 一般会单独创建一个方法
class CustomError extends Error{

}
//const error = new ValidationError(); -> error is an instance of both ValidationError and CustomError.
class ValidationError extends CustomError {
    constructor(){
        super();
    }
}
// error Middleware的注册
app.use(errorM1);
app.use(errorM2);
app.use(errorHandler);

app.listen(3000);

/**
 * CORS
 *
 * */
// response header add->  Access-Control-Allow-Origin'
const cors = (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*'); // name value -> * 代表所有的header
    next();
}
app.use(cors);

/**
 * Router 路由器，用于分发请求
 *
 * */

//先注册一个task router
const taskRouter = express.Router();
// mini-app
taskRouter.get('/', (req,res) => {
    res.json([1,2,3]);
})

const v1Router = express.Router();
// router 可以注册到app.use 里面；
v1Router.use('/tasks',taskRouter); // 把task router注册到V1 router上，
                                    // 当这个请求到达V1Router的时候，如果是以/tasks 起始， 如果是 准发给task Router
app.use('/v1',v1Router); //所有以/V1 开始的请求，把他转发给V1Router

//GET /V1/Tasks
// 分开一步步的路径， /V1 -> V1.Router  -> /tasks 查找到 taskRouter，taskRouter 处理 tasks/ 下面的根路径，返回[1,2,3]
//然后 taskRouter->'/' 代表 tasks下面的根路径
//职责划分更明确