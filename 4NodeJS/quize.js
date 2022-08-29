const express = require('express');
const app = express();

function m1(req,res,next){
    console.log(`m1 called`);
    next();
}
function m2(req,res,next){
    console.log(`m2 called`);
    next();
}
function m3(req,res,next){
    console.log(`m3 called`);
    next();
}
function m4(req,res,next){
    console.log(`m4 called`);
    next();
}
// quiz -> 说一下这些路径，那些middleware会被触发，response是什么
// GET /v1/tasks/1 ->m1,m2,route handler ->response: {"id":"1"} [原封不动的把params返回了，而不是1]
// GET /v1/tasks  -> m1,m2,m3,m4      ->response:cannot GET/v1/tasks -> express自己内部的处理机制，返回的html页面

// middleware chain
/**
 *  middleware chain 是按照实际请求路径注册的 - 根据路径，注册成自己的middleware chain.
 * GET /V1/tasks/1
 *  -> app.use(m1) -> 注册m1
 *  -> app.use('/v1',m2) -> 注册V2
 *  -> pp.get('/v1/tasks/:id' ->注册route handler
 * */

/**
 * event bubbling ->事件是如何触发的
 * 比如：计算器 有个按钮，按键的外层有个dev，上一层有个更大的dev，在外层是包含所有的按钮的dev，再外层是body
 * 当用户点击到按钮的dev的时候，会一层层往外触发dev，外层的dev只要绑定了event handler 都会被触发
 *
 * */

app.use(m1);
app.use('/v1',m2);
app.get('/v1/tasks', m3);
app.get('/v1/tasks', m4);
app.get('/v1/tasks/:id', (req,res) =>{
    res.json(req.params);
})
