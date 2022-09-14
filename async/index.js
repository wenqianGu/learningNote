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