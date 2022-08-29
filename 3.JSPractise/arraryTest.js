// const set = new Set([1,2,3,4]);
// console.log(set);
// set.add(5);
// console.log(set);
// console.log(set.has(5) );
// set.delete(1);
// console.log(set);
// console.log(set.has(1));
// console.log(set.size);

// const array = [1,2,3,4,4];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);
//
// const set = new Set();
// const a = {a:1};
// const b = {a:1};
// set.add(a);
// set.add(b);
// console.log(set) //{ { a: 1 }, { a: 1 } } a b 指向不同的内存地址
//
// function Person(name){
//     this.name = name;
//     this.toString= function (){
//         console.log(`name: ${this.name}`);
//     };
// }
// let lisa = new Person('lisa');
// lisa.toString();
//
// class Teacher extends Person {
//     constructor(name){
//         super(name); //写constructor的目的是传一些参数给父类
//     }
//     teach(){
//         console.log(`${this.name} is teaching`);
//     }
// }
// const leo = new Teacher('leo');
// leo.teach();
// leo.toString();

var scope = 'global scope';
function checkScope() {
    var scope = 'local scope';
    var b = () =>  scope;
}
console.log(checkScope());

