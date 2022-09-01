require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

const v1Router = require('./routes');
const logger = require('./utils/logger');
const swaggerJsDoc = require('./utils/swagger');

const PORT = process.env.PORT || 3000; // process当前进程，没有环境变量的时候默认使用3000

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors()) // 第三方的库基本都是通过app.use(函数调用)函数调用的方式调用，可以看文档，如何调参；
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
// GET /v1/tasks - app.use('/v1', v1Router)
//GET /tasks
app.use(v1Router); //所有请求都转到v1Router里面

app.listen(PORT, () => {
    logger.info(`server listening at port ${PORT}`);
});

