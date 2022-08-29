/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @param {string[]} strs
 * @return {string}
 * 1. First find the shortest string in the array; the length of this string is the maximum length of our prefix
      this is because a prefix can't be longer than the word it inhabits
 * 2. Next we iterate from index 0 to maxPrefixLength - 1
   3.We use this index to check the corresponding character of each string together and compare them
   4. This is easily done using Array.every
   5. If all characters at index i match, then we add it to our prefix result string
   6. As soon as we hit one mismatch, that's the end of the common prefix and we break out of our loop
      return prefix at the end, which may be empty
 */
var longestCommonPrefix = function(strs) {
    if(!strs){
        return '';
    }
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    let prefix = '';
    for(let i = 0; i<= maxPrefixLength - 1; i++){
        let char = strs[0][i];
        // 取strs的第一个flower的第一位，
        // 如果strs array里面所有的str[i]跟第一位都相同，则加入到prefix里面。
        if(strs.every(str => str[i] === char)){
            prefix += char;
        }else{
            break;
        }
    }
    return prefix;
};
// console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(['a']));