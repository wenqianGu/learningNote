# Common array operations

## Manipulation 
* push, pop, unshift, shift, splice(x,y,newAdded)
```javascript
const fruits = ['apple'];
console.log(fruits);//['apple']
fruits.push('pear');
console.log(fruits);// ['pear', 'grape']
fruits.unshift('grape');
console.log(fruits); // ['grape','pear', 'grape']
//splice(x,y,newAdded)
// remove y items from index x, and add new Added
fruits.splice(1,1,'watermelon','peach');
console.log(fruits); //['grape', 'watermelon', 'peach', 'pear']
let fruit = fruits.pop();
console.log(fruit); // pear
console.log(fruits); // //['grape', 'watermelon', 'peach']
fruit = fruits.shift();
console.log(fruit); // grape
console.log(fruits); ////['watermelon', 'peach']
```
## Iteration 
### for loop
```javascript
const fruits = ['apple','pear'];
for(let i = 0 ; i < fruits.length; i++){
    const fruit = fruitsp[index];
    console.log(fruit);
}
// apple
// pear
```
### for...of
```javascript
const fruits = ['apple','pear'];
for (let fruit of fruits){
    console.log(fruit)
}
// for...in ->0,1 (index) usually used in object
```

### forEach
* 遍历每一个元素，不能跳出遍历
* 不对遍历数据做操作
```javascript
const fruits = ['apple','pear'];
fruits.forEach((fruit) => console.log(fruit));
// cannot used break here
```

### Map
* 遍历A数组，返回B数组；B数组可以增加一些内容；
* Map 映射，把旧的数组映射成新的数组
* 使用在比如你想对现有的数字，进行修改，并返回长度一样的B数组的时候
```javascript
const fruits = ['apple','pear'];
const newFruits = fruits.map((fruit) => ({
    name: fruit,
    price:10,
}));
console.log(newFruits);
// {name: 'apple', price: 10}, {name: 'pear', price: 10}
```
### Reduce
* accumulator 上次循环的返回值，第一次循环没有值，0 是默认复制的位置
* number是数组的每一个值
```javascript
const numbers = [1,2,3];
const sum = numbers.reduce((accumulator, number) => accumulator + number  ,0);
console.log(sum); // 6
```
### Search 
* 非对象类的数组，比如全是数字
* 数组比较复杂，包含对象object，常用 find index some
```javascript
const numebrs = [1,2,3,4,5];
console.log(numebrs.includes(2)); // true 
// Array.some
console.log(numebrs.indexOf(2)); // 1
```

#### find
* find监听返回值，返回值是true，就是找到了；如果是false，就继续寻找； 找到第一个就直接返回
* find index 是寻找index
```javascript
const array = [{name:'lisa', age:18},
    {name:'Mitch', age: 20},
    {name: 'Mitch', age: 22}];
array.find((i)=> i.name === 'Mitch');
// {name:'mitch', age: 18 }
//第二个mitch不会返回

// array.find( (i) =>{
//     if (i.name === 'Mitch'){
//         return true;
//     }else {
//         return false;
//     }
//     }
// );
```
#### filter
* 遍历整个数字，找到所有满足条件的数据
```javascript
const numbers = [1,2,3,4,5];
const odds = numbers.filter((i) => i % 2); // 0 -> false ; 1 -> true
console.log(odds);

const fruits = [
    {
        name:'apple',
        color:'red',
    },
    {
        name:'pear',
        color:'green',
    },
    {
        name:'grape',
        color: 'green',
    },
];
const filteredFruits = fruits.filter((i) => i.color ==='green');
console.log(filteredFruits);
// {name: 'pear', color: 'green'}, {name: 'grape', color: 'green'}
```
* find 查找到'搜索得'第一个值，就直接返回； 不再继续查找；
```javascript
const fruits = [
    {
        name:'apple',
        color:'red',
    },
    {
        name:'pear',
        color:'green',
    },
    {
        name:'grape',
        color: 'green',
    },
];
const filteredFruits = fruits.find((i) => i.color ==='green');
console.log(filteredFruits);
//{name: 'pear', color: 'green'}
```
# Set
* Set is a data structure, we use it to store the unique values.
* set是一类数据结构，传入的数据有重复的会直接去掉重复的

```javascript
const set = new Set([1,2,3,4]);
console.log(set); //{1,2,3,4}
set.add(5);
console.log(set); // { 1, 2, 3, 4, 5 }
console.log(set.has(5) ); // true
set.delete(1);
console.log(set);//{ 2, 3, 4, 5 }
console.log(set.has(1)); //false
console.log(set.size); // false
```
* 常用的操作，对已有的数据去重
```javascript
const array = [1,2,3,4,4];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); //[ 1, 2, 3, 4 ]
```
```javascript
const set = new Set();
const a = {a:1};
const b = {a:1};
set.add(a);
set.add(b);
console.log(set) //{ { a: 1 }, { a: 1 } } a b 指向不同的内存地址
```

# Classes
* Class are a template for creating objects. Classes are in fact functions, 
class is only a syntax sugar.
  
* class inheritance / prototype 基于原型继承的；原型链 - 对于实际开发没有什么帮助，但是可以作为理论自学
* 代理 delegate apple 继承 Fruit - 
* Fruit getPrice() / apple.getPrice() 

```javascript
function Person(name){
    this.name = name;
    this.toString= function (){
        console.log(`name: ${this.name}`);
    };
}
var lisa = new Person('lisa');
lisa.toString();
```
#### Question - 调用person的时候，写不写new 有什么区别？
* const lisa = new Person('lisa') //
    * +new 实例化一个object

* const lisa = Person('lisa')
    * 不加new直接调用person 返回undefined
```javascript
function Person(name){
        this.name = name;
    this.toString = function () {
        console.log(`name: ${this.name}`);
    }
    return undefined; // 默认返回的undefined，所以可以不写
}
const obj = Person('lisa'); // undefined
```
#### Answer New做了什么事情
```javascript
function Person(name){
    const person = {}; // Step1. new 第一步 创建一个对象
    //Step2. 原型链的关联
    this.name = name; // this 指向 创建出来的新的person对象
    this.toString = function (){
        console.log(`name: ${this.name}`);
    }
    return person; // Step 3. 返回这个创建的object 
}
```
##### Question: function 本身有return，返回值是不是会被替换掉
* 
```javascript
function Person(name){
        this.name = name;
    this.toString = function () {
        console.log(`name: ${this.name}`);
    }
    return 1; //{a:1} ; // 返回如果是function -{a:1}，就不会被替换掉；其他比如返回1，会被替换掉； 
}
const lisa = Person('lisa'); 
console.log(lisa) // Person {name: '', toString: ƒ} 或者 {a:1}
```
* class是为了隐藏prototype开发出来的。
* class是一个模板，通过这个模板可以实例化多个对象；
    * Lisa 是一个Person的实例化， 拥有name属性，但是lisa的prototype指向的是person的prototype
    * lisa.__proto__ === Person.prototype // true
```javascript
    class Person{
        constructor(name){
            this.name = name;
        }
        toString() {
            console.log(`name: ${this.name}`);
        }
    }
    const lisa = new Person('lisa'); // 实例的lisa 继承了class里面的toString 方法
    lisa.toString(); // name:lisa
```
## extends
* 指明继承的那个 parent class
* constructor 方法里面一定要调用super 
- 执行继承的父类的constructor 方法； 只有个调用了person（父类）的构造方法，
  才能创建一个person的实例，才能访问属于person的方法；
  * 只属于子类的方法可以写在只写在里面
```javascript
    class Teacher extends Person {
        constructor(name){
            super(name); //写constructor的目的是传一些参数给父类(person)；
                         // 如果父类没有构造函数，子类可以不写
        }
        teach(){
            console.log(`${this.name} is teaching`);
        }
    }
    const leo = new Teacher('leo');
    leo.teach(); // leo is teaching
    leo.toString(); // name: leo -> BUT How?
    // step 1: Leo 的object是不是有toString 如果有，直接调用；
    // step 2 ： 如果没有，向上查找 Teacher是不是有toString；如果没有继续向上查找toString
```
# Quiz
```javascript
function Pet(name){
    this.name = name;
    this.getName = () => this.name; // arrow function 被谁包裹住，this就指向谁-> pet 
                                    // cat 是一个pet的实例化，调用的时候还是指向pet的name；
}
const cat = new Pet('Fluffy');
console.log(cat.getName()); // Fluffy
const {getName} =cat;
console.log(getName()); //Fluffy
```
```javascript
var scope = 'global scope';
function checkscope() {
    var scope = 'local scope';
    function f(){
        return scope;
    }
    return f(); // 返回f()执行的结果
}
checkscope(); // local scope //闭包 -执行f（）的时候，会去f（）书写的时候的上级作用域去找scope；
```
```javascript
var scope = 'global scope';
function checkscope() {
    var scope = 'local scope';
    function f(){
        return scope;
    }
    return f;
}
checkscope()(); // local scope
```