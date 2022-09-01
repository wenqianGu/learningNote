const swaggerJsDoc = require('swagger-jsdoc');

module.exports = swaggerJsDoc({
    definition:{
        openapi:'3.0.0',
        info: {
            title:'Lisa Task',
            "version":'1.0.0',
            contact:{
            name:"Lisa",
            "email":"guwenqian10@gmail.com",
            },
            description:"This is the first swagger api",
        },
    },
    apis:['src/controllers/*.js']
})
