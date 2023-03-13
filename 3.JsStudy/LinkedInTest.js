const dessert = {type: "pie"};
dessert.type = "padding";

const seconds = dessert;
seconds.type = "fruit";

console.log(dessert.type)
console.log(seconds)


// if(true){
//  let first = 'You';
// }
//
// function fScope() {
//  var second = 'got this'
//  console.log(second)
// }
//
// fScope();
// console.log(first);
// console.log(second);
//
//


//event loop

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

console.log(`i: ${i}`); // 同步函数

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

// Question
var thing;
let func = (str = 'no arg') => {
    console.log(str);
}

console.log(`func(thing) : ${func(thing)}`);
console.log(`func(null) : ${func(null)}`);

// question
class Animal {
    static belly = [];
    eat(){ Animal.belly.push("food");}
}

let a = new Animal();
a.eat();

//console.log(`q5:${a.belly[0]}`); // cannot read properties of undefined
//console.log(`q5:${a.prototype.belly[0]}`); // cannot read properties of undefined
console.log(`q5:${Animal.belly[0]}`);
// console.log(`q5:${Object.getPrototypeOf(a).belly[0]}`); //TypeError: Cannot read properties of undefined (reading '0')
//