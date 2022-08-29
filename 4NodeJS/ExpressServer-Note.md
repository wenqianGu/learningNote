# Middleware function 
* Express is a routing and middleware web framework that has minimal functionality of its own:
An Express application is essentially a series of middleware function calls.
    * Express是一系列的middleware function组成的
    * 不单单局限于express，react里面也有
    * Node.js是由event driven，async waiting, non-block IO
        * Event 是由一个client发了一个请求到我们的server这边，请求进到application的时候，事件（callback function）触发了，触发一系列的函数
        * 正常请求会进入到route handler，进行一个返回；
    
* Middleware functions are functions that have access to the request object(req), the response object(res),
and the next middleware function in the application's request-response cycle. 
    * application's request-response cycle ->client 发送一个请求，server回复一个response，next指定下一个middleware function
  
* The next middleware function is commonly denoted by a variable named next. 
    * middleware存在于很多框架中
  
### Middleware function can perform the following task:
1. Execute any code
2. Make changes to the request, and the response objects
3. End the request-response cycle -> return
4. Call the next middleware function in the stack.
* Note: If the current middleware function d  oes not end the request-response cycle, it must call 
next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
    * 如果请求没有被妥善处理，会一直占用内存挂载哪里
    
### middleware 代码实例
* 调用next的时候，传入的参数？ 
    * 错误信息，比如校验-会使用标准的error处理框架
    * 异步的抛出错误 - 统一的Error middleware 返回
    
* Middleware的调用 
  1. application level middleware 的调用
    * 调用这个middleware，所有请求都会经过这个middleware，对req的请求做一个转换，然后把json文件赋值给
    * use applies to all methods
    
    2. 第二种： app.get('/',m1); // Only apply to get request to specific path '/'
    3. 第三种： app.get('/'.m1,m2,m3,m4,(req,res)=> {};
```javascript
app.use(express.json());
app.get('/',m1); // Only apply to get request to specific path '/'
app.get('/'.m1,m2,m3,m4,(req,res) => {
    // 针对'/' 的 get请求到，先执行m1,m2,m3,m4 最后在执行 route handler. 
})
```
```javascript
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
```

* Error Middleware 怎么注册
    * 在最后注册
    * 按照顺序注册
    * 针对特定的错误，写不同的error middleware / error handler，每写一个都要测试
    * 场景：比如用户提交一个form，提交数据不符合要求，需要使用error middleware处理
```javascript
app.use(errorM1);
app.use(errorM2);
app.use(errorHandler);
app.listen(3000);
```

## 注册机制 
    * app.use / app.get / app.put / app.delete
    * 路径要完全匹配 
    * request -> GET /v1/tasks

```javascript
    // request -> GET /V1/tasks
    //app.get('/V1/tasks')
    // match

    // request -> GET /V1/tasks
    //app.post('/V1/tasks')
    // not match

    // request -> GET /V1/tasks
    //app.get('/V1/')
    // not match
```
 * app.use
    * regex -> 匹配路径的时候，使用正则表达式
    * '*' 匹配所有 
```javascript
// request -> GET /v1/tasks
// app.use('/v1/tasks*')
// /v1/tasks   /v1/taks/:id    /v1/tasks/xxxx 都可以比配上
// mtach

app.use('*', express.json()); // * 匹配所有，可以不写
app.use('', express.json());
app.use(express.json());
```

#### Q1. 什么是middleware？ 
  * Middleware functions can perform the following tasks:
    * Execute any code.
    * Make changes to the request and response objects. 
    * End the request-response cycle. 
    * call the next middleware function in the stack.
    * If the current middleware function does not end the request-response cycle, 
  it must calle next() to pass control to the next middleware function. 
      Otherwise, the request will be left hanging.  
#### Q2. Middleware 和 route handler的区别
  * 大量重复错误 - 重复的路径错误 （密码错误-不是）
  * Route handler 是一种特殊的middleware， 通常不调用next(), 通常不写第三个参数
    * 直接返回结果
    * route handler 接收 next参数，但是不用next（），所以不写这个参数
  * 针对这个请求的实际逻辑处理
#### Q3 Middleware and Error Middleware的区别 
  * Error Middleware 专门用来处理error的情况的，接受四个参数，error 第一位
  * Error Middleware chain 有他自己独特的chain，和 middleware chain是不一样的；

#### JR TODOS
  * lazebear.github.io/jr-todos/

#### Router 路由器

* 直接在前端提交的表单数据格式是 x-www-form-urlencoded的时候，
* app.use(express.urlencoded({extend:true})); // express 用来解析表单数据

#### API 设计的注意事项
* 返回数据，保持格式一致性 {date, error, status}
* 最低标准也是返回json数据，这样请求方可以解析数据
