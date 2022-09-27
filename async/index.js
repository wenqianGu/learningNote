function fetchData(url,cb) {
setTimeout(()=>{
    cb(url);
    console.log(url)
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