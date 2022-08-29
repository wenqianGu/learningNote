# ECAMScript
 * ES5 2009
 * ES6 2015
 * ES7 2016
 ## Var
 *   Var is **function** scoped, it means if the variable is declared within a function, it can be accessed
 *   within the function. Similarly, if var is used outside of the function the variable can be accessed in
 *   via window object.
 ### Scope
 1. Function scope
 2. Global scope
 3. block scope
 ```javascript
    var apple = 'apple';
    function foo(){
        var pear = 'pear';
        console.log(apple); // apple
        console.log(pear);  // pear
    }
    console.log(apple); // apple
    console.log(pear);  // Uncaught ReferenceError: pear is not defined
```

#### Re-declare and update
```javascript
    var fruit = 'apple';
    var fruit = 'pear';
    console.log(fruit); // pear
    fruit = 'grape';
    console.log(fruit) // grape
```
###Hoisting
* 企业级开发的时候，在文件头部写主要逻辑 - 调用foo()；下面写function foo(a,b);
* 此处涉及到变量提升；
```javascript
    console.log(fruit); // undefined 变量声明会被提升到头部，但是赋值并不会
    var fruit = 'apple';
```
###equals 
    * equals is similar to Hoisting section code, the JS hosit the variable declartion to the header section. 
```javascript
    var fruit;
    console.log(fruit); // undefined 
    fruit = 'apple'; 
```
###Problem
* 以前的开发javascript， 会有不同的文件，按照文件的方式一个个导入到现在的页面上；
* 不同的开发者可能会修改同一个变量 fruit
* 如果是不同的文件，没办法保证所有文件的变量名不重复
   * 解决方案： 模块化开发
```javascript
    var fruit = 'apple';
    if(true){
         // think about this is in another file
        var fruit = 'pear';
    }
    console.log (fruit); // pear
```

##let
###Scope
* const obj = {} 不构成一个块级作用域
*Let is block scoped. A block is a chunk of code wrapped by currly brackets {}
for example : 
>function() {// this is a block} if(true){ // this is also a block}
* Let's reuse the example above but replace the keyword with let

** var 会改变 fruit的值，但是let因为是block的作用域，不会改变 fruit的值。
```javascript
    let fruit = 'apple';
    if(true){
    var fruit = 'pear';
    }
    console.log (fruit); // pear
```
#### Re-declare and update
* let variable can be used to update, 
* but the variable cannot be re-declare. 
```javascript
    let fruit = 'apple';
    // let fruit = 'pear'; // Uncaught SyntaxError: Identifier 'fruit' has already been decleared
    fruit = 'grape';
    console.log(fruit) // grape
```
####Hoisting
* Different to var, let is hoisted, but the variable is not initialized. 
```javascript
  console.log(fruit); //ReferenceError: Cannot access 'fruit' before initialization
  let fruit = 'apple';
```
##const
* Scope and the hoisting is the same as let
####Re-declare
```javascript
  const fruit = 'apple'
   // const fruit ='pear'; // SyntaxError: Identifier 'fruit' has already been declared
  fruit = 'grape'; //TypeError: Assignment to constant variable.
  console.log(fruit);
```
####Update
* value vs reference
* Pass by reference or pass by value 【普通变量，传递value 函数只是对传入的value做操作，并不改变传入的variable本身的值】
* 在没有改变地址的指向的时候，可以改变地址里面 的值 fruit.color 
* 如果重新指向一个新的地址，比如 fruit = {name: ccc, color: ddd}会报错。
```javascript
  const fruit = {name: 'apple', color:'red'};
  // fruit = {name: 'apple', color: 'green'} //TypeError: Assignment to constant variable.
  fruit.color = 'green';
  console.log(fruit); //{ name: 'apple', color: 'green' }
```
#### similar in array
```javascript
  const fruits = [];
  // fruits = ['apple']; // TypeError: Assignment to constant variable.
  fruits.push('apple');
  console.log(fruits); //[ 'apple' ]

```
## Quiz
1. What's the output of the following code
* var function scope;
* In the for loop, the i has changed the outside variable i to 0. 
```javascript
    var i = 5;
    for(var i = 0; i < 3; i++){
        console.log(i); // 0 1 2
    }
    console.log(i); // 3
```

2. What's the output of the following code
* let block scope
* external i and for loop i is different. 
```javascript
    let i=5;
    for (let i =0; i<3; i++) {
        console.log(i); // 0,1,2
    }
    console.log(i); // 5
    
```

3. 
* SetTimeout 是异步函数 ，第一个参数是一个回调函数，第二个参数是 多少s之后，执行第一个函数。

```javascript
    var arr = [10,12,15,21];
    for (var i = 0; i < arr.length; i++) {
        setTimeout(function (){
            console.log(`Index: ${i}, element: ${arr[i]}`);
        },1000)
    }
```

####Note 
######var let const 的选择
  * 完全不用var
    * 开发使用的是Es6之后的语法，但是浏览器可能不是100%理解，
      * 代码转译，方便支持所有浏览器，需要使用Babel
  * 如果是array object，使用const
  * 其他数据类型，使用let

## Conclusion
|Keyword|Scope| re-declare |update|hoisting|
|-------|-----|------------|------|--------|
|var | function | Yes | Yes | Yes(undefined)|
|let | block    | NO  | Yes | Yes(not initialized) | 
|const| block   | No  | NO  | Yes(not initialized) |

let的hoisting，不让在声明之前使用，所以会报错
```javascript 
   console.log(fruit);
   let fruit = 'apple';
```


#### function expression
* 在声明之前不可以调用
 ```javascript
 const foo = function(){}
  ```
#### function declaration
* function declaration 会直接提升变量到最上面，在声明之前可以调用
  ```javascript
  function foo(){}
  ```
3.

* SetTimeout 是一个异步函数
* for loop 里面的var i 是一个变量，（因为需要等1s之后再执行console.log的操作）循环到最后，i的值是4， arr[4] 是undefined
* output： Index: 4, element: undefined
```javascript
  var arr = [10,12,13,14]
  for (var i = 0; i < arr.length; i++){
    setTimeout(function(){
        console.log(`Index: ${i}, element: ${arr[i]}`)
    },1000)
  }
```
* For loop  里面的 Let 变量，在每一次循环的时候，都会生成一个i，并且不会销毁
* output will be
    * Index: 0, element: 10
    * Index: 1, element: 12
    * Index: 2, element: 13
    * Index: 3, element: 14
```javascript
var arr = [10,12,13,14]
  for (let i = 0; i < arr.length; i++){
    setTimeout(function(){
        console.log(`Index: ${i}, element: ${arr[i]}`)
    },1000)
  }
```

###  Templating String
* also named, template literal, string interpolation
```javascript
const name = 'lisa'
    const hobbit = 'reading'
    //es5
    console.log('My name is ' + name + ', and I like ' + hobbit)
    // es6
    console.log(`My name is ${name}, and I like ${hobbit}`)
```
    
### Spread operator
* 展开字符串
* 创建一个新的array，需要用到之前的array的值
```javascript
const array = [1,2]
const newArray = [...array,3,4];
console.log(newArray) //[1, 2, 3, 4]
```


```javascript
const fruit ={name:'apple',color:'green'};
let newFruit ={...fruit, color:'red'};
// 前面展开，会被后面的color 赋值 覆盖
console.log(newFruit); // {name: 'apple', color: 'red'}
newFruit = {color:'red',...fruit};
// 后面展开要覆盖前面的值,但是顺序会变化
console.log(newFruit);  //{color: 'green', name: 'apple'}

```
### Destructuring
* 解构赋值，右边是被解构的对象，左边的解构要和右边的一致;
* 把原本的解构拆解开，获取里面的值
* Object destructing extracts property from object and assigns it to variable. One way would be using the dot notion
```javascript
    const fruit = {name:'apple',color:'red'};
    const name = fruit.name; // apple
    const color = fruit.color; // red
```


* with the new syntx, we don't need to repeatly refer to the fruit object
```javascript
 const fruit = {name: 'apple', color:'red'};
    //解构等号右边的值，左侧的解构要和fruit的一致；顺序无所谓
    const {name, color} = fruit;
    console.log(name);// apple
    console.log(color); // red
    // object keys
``` 
   
* we can also rename the variable
```javascript
   const fruit = {name: 'apple', color:'red'};
    // 重命名变量
    const {name:fruitName, color: fruitColor} = fruit;
    console.log(fruitName); // apple
    console.log(fruitColor); // red
```
* or desctructing an array
```javascript
 const fruits = [
        {name:'apple',color:'red'},
        {name:'pear', color:'green'}
    ];
    const [apple, pear] = fruits;
    console.log(apple);  //{name: 'apple', color: 'red'}
    console.log(pear);   // {name: 'pear', color: 'green'}
    // 解构 左侧的数据类型要和右侧完全一直，前面是[] 里面包含的是{}
    const [{color: appleColor},{color:pearColor}] = fruit;
    console.log(appleColor);
    console.log(pearColor);
```
* more complated use cases
```javascript
  const [foo,[bar],baz] = [1,[2],3];
  console.log(foo);
  console.log(bar);
  console.log(baz);
```
* 前面两个占位符，这样解构一致，可以获取到third的值
```javascript
  const [,,third] = ['foo','bar','baz'];
  console.log(third); // baz
```
* rest must be the last element
```javascript
  const [head, ...tail] = [1,2,3,4];
  console.log(head); //1
  console.log(tail); // [2, 3, 4]
```
* 解构的时候，可以赋一个默认值
```javascript
  const [missing = true] = [];
  console.log(missing); // true
```
```javascript
  const fruit = {name:'apple', price:12, color:'green'}
  const {name, ...rest} = fruit;
  console.log(name); // apple
  console.log(rest); //{price: 12, color: 'green'}
```
## Shallow copy & Deep copy
* shallow copy / deep copy
* shallow copy
    * 浅拷贝可能会污染之前的数据，拷贝了reference
* Deep copy
    * 对所有的层级数据做一次浅拷贝，把值拷贝进来
    * 会涉及 算法的操作，递归等
    * lodash 第三方成熟的libraries 来实现深 copy / small firm.
```javascript
    const fruit = {name:'apple', price:12, color:'green', location:{city:'brisbane'}}
      // shallow copy,浅copy 拷贝的是 value of name, price 和 location 的reference 
    const newFruit = {...fruit};
    newFruit.location.city = 'sydney'
      //因为是浅拷贝，loaction是reference，所以改变newFruit的location的city，也会改变 fruit里面loction的city
      // fruit.loction.city => sydney
    console.log(fruit.location.city); // sydney
```

## Default parameters
* 默认值
```javascript
    function sum(a =1, b =1){
        return a + b;
      }
      console.log(sum()); //1
      console.log(sum(undefined, 2)); // 3
      console.log(sum(3,4)); // 7   
```

## Arrow function
```javascript
  const add = function (x,y){
    return x + y;
  }

  const add = (x,y) => {
    return x + y;
  }
  // equals
  const add = (x,y) => x + y;
```

```javascript
  const add = function (x,y){
    return x + y;
  }

  const add = (x,y) => {
    return {sum: x + y};
    //返回一个object
  }
  // equals
  const add = (x,y) => ({sum:x + y});
  // 返回的值是object的时候，{} 与函数本身符号冲突，加上（） 来做区分
```

## Callback
*  当我们把一个函数A，传给另外一个函数B的时候，被传入的A就是回调函数；
* Explain in a simple way, pass the function as a parameter and when some event happened (addEventListener), execute this function. Frequently used for async or sequential purpose.
* why？
    * 碰到异步的情况， setTimeout / addEventListener，  事件触发的时候，才会执特定的函数
    * 或者保证代码执行的顺序。 A函数先执行，传给A的B函数再执行
* 实际开发使用场景
    * 导入导出，导入到一个函数里面，然后再调用导入的函数； 做调用的时候，sum 模块依赖于 logger 模块。 这样就绑定在一起了。 耦合-

```javascript
  function logger(param){
    console.log(param);
  }
  function sum(x,y,callback){
  setTimeout(function (){ // setTimeout 模拟 sum需要1s时间才能执行完
    const total = x + y;
    callback(total);
  },1000);
  }
  sum(1,2,logger);

````
### Callback with arrow function
```javascript
  setTimeout( function(){
    console.log('normal function');
  },1000);

  setTimeout(() => {
    console.log(`arrow function`);
  } ,1000);
````
## Closure
* 当我们想要访问一个变量，但是该变量在该（当前）作用域下不存在，所以需要查找上级作用域，是否存在的时候, 涉及到这种跨域操作的情况，称为闭包；
* Closure are everywhere in JS. A closure is when a function has access to its lexical scope even when it is called outside of it. Closures are created every time a function is created, at function creation time.
* A few complex, but common closure cases:
    * 闭包的形成，在我们写出代码的时候就形成了。 非运行之后
    * lexical scope: 词法作用域，foo在写下的时候，就决定了会去取全局变量 number = 1;
    * 是在写下时候的变量去获取，书写上级作用域，而不是执行时去寻找，执行上级作用域（不是执行上级作用域）；

1. a function was passed to another function as param
```javascript
 // we normally don't write this code 
 const number =1; // 这里不定义，会报错，变量未声明 -Uncaught ReferenceError: number is not defined
  function foo(){
    console.log(number); // 我们在foo这个fun里面找number，需要向上级作用域查找 number =1;
  }
  function bar(fn){
    const number = 2;
    fn(); // 这里调用的? 为啥不去取 bar里面的number = 2 ！ 因为函数foo声明（书写的）的时候，上级作用域就是指number =1这里；
  }
  bar(foo); //1
```
#### 如何定义全局变量
* 开一个单独的文件，文件里面列出来全局变量，全局变量会和环境变量（程序运行的环境） 混合在一起。
* 有时候会从环境变量读取出来，作为全局变量
* 提取出来，单独放一个文件里面
2. a function was returned by another function
```javascript
function foo(){
  const number = 1;
  return () => {
    console.log(number);
  }; // 把一个函数当做返回值，返回出来。 
}
const number = 100;
foo()(); // 1 - 跟调用时，上面写的值没有关系；
//执行foo的时候，在返回值这里，会向上寻找变量number
````
we can use this technique to hide some data
* 类似于java的私有变量，用户不可以直接修改counter；只能通过暴露出去的函数去修改变量，或者获取变量
```javascript
    function creatCounter(){
        let counter = 0;
        const increment = () =>{
            counter ++;
        };
        const getCount = () =>{
            return counter;
        };
        return {
          increment,
          getCount,
                    };
    }
    const counter = creatCounter();
    counter.increment();
    console.log(counter.getCount());
```

## IIFES
* Immediately Invoked Function Expressions Commonly used to avoid polluting the global namespace and modules. 
* 声明之后，立即执行的函数
* 模块化的概念，每个文件就是一个模块； node js类似于 IIFES，这个只存在于当前的文件，不会污染其他变量；
```javascript
    (function (){
     // some variable in its own scope   
    })();n 
```
 ## this
* In most cases, the value of this is determined by how a function is called (runtime binding).  
It can't be set by assignment during execution, and it may be different each time the function is called.
strict mode is enabled by default in ES6 modules.
  
### this keyword in normal functions
* function foo 是注册在window下面的
* 在一个普通函数里， 谁调用的这个函数，this就指向谁； foo() is called by window;
```javascript
    function foo() {
    console.log(this);
    }
    foo();// window
```
### this keyword in normal functions with bind, call, apply
* call apply 传入参数之后，立即执行
```javascript
    // a1, a2
    foo.call({number:1}); // {number:1} 传入的操作，就是this的对象；人为的把this指向number1
    //[a1,a2]
    foo.apply({number:2}); // {number:2} 
    // bind returns a new function
    const bar = foo.bind({number: 3});
    bar(); // {number: 3}
```

### this keyword in an object and callback functions 
* this  context this让我们知道上下文；
* 在一个普通函数里面，谁调用的这个函数，this就指向谁
```javascript
const calendar = {
    currentDay:6,
    nextDay(){
        this.currentDay++;
        console.log(this.currentDay);
    },
};
calendar.nextDay(); // 7
```

* this 在callback function 
* setTimeout 里面的函数没有被调用，是XXms之后，自动执行； 是被window调用的，this指向window
* 这是js的坑。解决方案 .bind(this) / Arrow Function 
```javascript
const calendar = {
    currentDay:6,
    nextDay(){
        setTimeout(function (){
            this.currentDay++; // this 指向 window
            console.log(this.currentDay);
        }.bind(this)); // 先绑定再传给setTimeout，所以绑定的时候，this是在nextDay里面的，
    },
};
calendar.nextDay(); // NaN - Not a Number
```

```javascript
const calendar = {
    currentDay:6,
    nextDay(){
        const that = this; // 解决 callback function this指向的问题
        setTimeout(function (){
            this.currentDay++; // this 指向 window
            console.log(that.currentDay);
        }); // 先绑定再传给setTimeout，所以绑定的时候，this是在nextDay里面的，
    },
};
calendar.nextDay(); // NaN - Not a Number
```

### In arrow function, this points to the enclosing lexical context's this
```javascript
const calendar = {
    currentDay:6,
    nextDay(){
        setTimeout( () => {
            this.currentDay++; 
            console.log(this.currentDay);
        }); 
    },
};
calendar.nextDay(); //7
```

```javascript
const calendar = {
    currentDay:6,
    nextDay(){
         const cb =() => {
            this.currentDay++; 
            console.log(this.currentDay);
        };
         setTimeout(cb);
    },
};
calendar.nextDay(); //7
```

```javascript
const calender = {
    currentDay: 6,
    normal: function () {
        console.log(1, this); // calender
        setTimeout(function () {
            console.log(2, this); // window
        });
    },
    arrow: function () {
        console.log(3, this); // calender
        setTimeout(() => {
            console.log(4, this); // calender - 这里面的this是arrow func调用的，指向上一级的this - calender
            //arrow func的this 指向，是由上级作用域决定的。 所以4 跟 3 指向相同；
        });
    },
};
calender.normal();
calender.arrow();
```
### Quiz
```javascript
const object = {
    message: 'Hello, World',
    getMessage() {
        const message = 'Hello, Earth!';
        return this.message;
    },
};
console.log(object.getMessage()); // 'Hello, World'
```
```javascript
 const object = {
  who: 'World',
  greet() {
    return `Heelo, ${this.who}`;  
  },  
    farwell: ()=>{ //这里是被 object调用，指向上一级window ； 
      return `Goodbye, ${this.who}`;
    },
};
console.log(object.greet()); //  Heelo, World
console.log(object.farwell()); // Goodbye, undefined
```
```javascript
const object = {
  who:'lisa',
  cb() {
    console.log(`Hello, ${this.who}`)  
  },  
};
function foo(cb){
    cb();
}
foo(object.cb);// Hello, undefined -在哪里被调用的，指向哪里；object.cb被foo（）调用，但是foo里面没有who
object.cb(); // Hello, Lisa
```
