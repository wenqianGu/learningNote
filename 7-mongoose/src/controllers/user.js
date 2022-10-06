const User = require('../models/user')

async function register(req, res) {
    const {username, password} = req.body;
    //validation
    // check if username duplicate
    // and uniq index to username?
    const user = new User({username,password});
    // method1: 创建完user之后，保存之前；直接用bcrypt 加密
    // method: 在module里面 创建一个函数
    await user.hashPassword();
    await user.save();

    return res.json({username});
}

module.exports = {
    register,
};