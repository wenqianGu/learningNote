/**
 * @param {string} s
 * @return {number}
 */
const obj ={
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
}
let  romanToInt = function(s) {
  let value = 0;
  for(let i = 0; i < s.length ; i++){
  //    遍历数组，如果obj【s【i】】[current value]小于上一位值，value的结果等于 当前指 - 上一位值 ； 否则 等于相加
      if(obj[s[i]] < obj[s[i+1]]){
          value = value -obj[s[i]];
      } else {
          value = value + obj[s[i]];
      }
  }
  return value;
};

console.log(romanToInt('MCMXCIV'));