# Mongoose

## Call back hell
1. 不易读
2. debug难

```js
function fetchData(url,cb) {
setTimeout(()=>{
    cb(url);
},1000)
}

// callback hell
fetchData('example.com/1',(data1) => {
    fetchData('example.com/2',(data2)=>{
        fetchData('example.com/3',(data3)=>{
            fetchData(('example.com/4'),(data4)=>{

            });
        });
    });
});
```

## Promise
* Promise queue / micro task queue
    - macro task queue
    - [p2],[cb1]
```js
// promise
/**
 * promise 三种状态
 * pending, resolved(fulfilled) rejected ->promise.then可以监听pending返回的结果
 * 
 * pending可以变为resolve or rejected； 状态不可逆
 * 
 * resolve
 * reject 
 */
const promise = new Promise((res,rej) => {
    res([]); // res返回一个array
     // rej({})
})

// promise chain 
// .then里面返回的新的promise，他的结果是pending，如果是resolve -调用.then; 如果返回的是reject 会被.catch 抓取
promise.then((date)=>{
    //data = [] ->上一个promise的返回 
    return {};  
    //返回的结果可能是array 对象或者新的promoise，如果是新的promise，可以继续用.then监听
    // return new Promise() // async call
}).then().catch((err) => {
    // err = {} ->上个promise的返回 rej({})
    return {};  // return promise
}).then().catch

```
## Async await 
* syntax sugar
* async await 
* finally ->无论前面失败或者成功，都会执行finally的code，finally不接受参数；不返回

```js
async function main() {
    // fetchDataPromise().then().then()
    try {
        const result = await fetchDataPromise();
        const result2 = await fetchDataPromise();
    } catch (e) {
        console.log(e);
    }
}

main();

```

## Mongoose
* A ORM (Object relational mapper) or ODM (object data mapping).
* In human language: make lifer easier when working with mongo database.
* Mongoose底层用的是Mongo Client 
    -In SQL, we will use Sequelize library. 
* Schemas vs Models vs Documents 
    - 当我们创建新的document的时候，mongoose会帮我们创建——ID
    - model是我们在Mongoose里面注册的模型； 名字是注册在Mongoose里面的
        - colletion的名字 -》 从model来的，小写 + 复数
    - Schema 
```jsx
const schema = new mongoose.Schema({name:String});
const Model = mongoose.model('Model',schema);
const document = new Model({name:'document'}); //创建document的时候，实例化的model 
```
