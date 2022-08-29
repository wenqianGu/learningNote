const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
// 导入路由
const {router} = require('./router');
// 注册路由
app.use(router);

// error handler
// app.use((err,req,res,next) => {
//     if(err){
//         res.send(`Data Error handler`);
//     }
// });

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});