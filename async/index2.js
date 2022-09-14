function fetchDataPromise(url){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            console.log('promist:' + url)
            res(url);
        },1000);
    });
}

const promise = fetchDataPromise('example.com/1');
promise.then((data1)=>{
    return fetchDataPromise('example.com/2')
})
.then((data2)=>{
return fetchDataPromise('example.com/3')
})
.then((data3)=>{
    return fetchDataPromise('example.com/4')
})
.then((data5)=>{
        return fetchDataPromise('example.com/5')
})