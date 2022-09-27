const express = require('express');

const v1Router =  express.Router();

v1Router.get('',(req,res)=>{
    res.json({});
});

module.exports = v1Router;