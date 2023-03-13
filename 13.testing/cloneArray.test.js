const cloneArray = require('./cloneArray')

test('properly clones array',()=>{
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array) //clone的array是[1,2,3]
    expect(cloneArray(array)).not.toBe(array) //不是一个新的array
})

