// variable hoisting
// 变量提升 在func里面，只看func，在for 循环里面的 index也会提升到func头部声明
//如果没有function，会直接提升到文件头部
function abc() {
    //variable hoisting
    let index;
    let b;
    index = 1
    b = 4
    for (let index = 1 ; index < array.length; index ++ ){
        let b = 123 ;
        const element = array[index];
    }
}