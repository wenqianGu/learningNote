const subtract = require('./subtract')
const sum = require("./sum");

test('roperly adds two numbers',()=>{
    expect(
        subtract(2,1)
    ).toBe(1)
})