// var apple = 'apple';
// function foo(){
//     var pear = 'pear';
//     console.log(apple);
//     console.log(pear);
// }
// foo()
// console.log(apple);
// console.log(pear);

// let fruit = 'apple';
// // let fruit = 'pear'; // Uncaught SyntaxError: Identifier 'fruit' has already been decleared
// fruit = 'grape';
// console.log(fruit) // grape

// console.log(fruit); //ReferenceError: Cannot access 'fruit' before initialization
// let fruit = 'apple';

// const fruit = 'apple'
//  // const fruit ='pear'; // SyntaxError: Identifier 'fruit' has already been declared
// fruit = 'grape'; //TypeError: Assignment to constant variable.
// console.log(fruit);

// const fruit = {name: 'apple', color:'red'};
// // fruit = {name: 'apple', color: 'green'} //TypeError: Assignment to constant variable.
// fruit.color = 'green';
// console.log(fruit); //{ name: 'apple', color: 'green' }
//
// const fruits = [];
// // fruits = ['apple']; // TypeError: Assignment to constant variable.
// fruits.push('apple');
// console.log(fruits); //[ 'apple' ]
//
// var i = 5;
// for(var i = 0; i < 3; i++){
//     console.log(i);
// }
// console.log(i);

// let i=5;
// for (let i =0; i<3; i++) {
//     console.log(i);
// }
// console.log(i);

var arr = [10,12,15,21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function (){
        console.log(`Index: ${i}, element: ${arr[i]}`);
    },1000)
}
