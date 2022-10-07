const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env; // 不同的环境生成不同的值，避免泄露，只有机器知道这个值

function generateToken(payload) {
    return jwt.sign(payload, JWT_KEY, {expiresIn: '1h'});
}

module.exports = {generateToken};