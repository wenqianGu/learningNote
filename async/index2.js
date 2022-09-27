
function fetchData(url, cb) {
    setTimeout(() => {
        cb(url);
        console.log('callback:' + url)
    }, 1000)
}

const cb = (data1) => {
    const cb2 = (data2) => {
        fetchData('example.com/3', (data3) => {
            fetchData('example.com/4', (data4) => { });
        })
    }
    fetchData('example.com/2', cb2)
}

fetchData('example.com/1', cb);

/**
 * 
 * @param {*} url 
 * @returns 
 */
function fetchDataPromise(url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('promise:' + url)
            res(url);
        }, 1000);
    });
}
const promise = fetchDataPromise('example.com/1');
promise.then((data1) => {
    return fetchDataPromise('example.com/2')
})
    .then((data2) => {
        return fetchDataPromise('example.com/3')
    })
    .then((data3) => {
        return fetchDataPromise('example.com/4')
    })
    .then((data5) => {
        return fetchDataPromise('example.com/5')
    })

/**
 * async await
 */

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