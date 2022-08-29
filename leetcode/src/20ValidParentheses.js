/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    if(s.length%2!==0) return false; //if size is odd its not balanced
    const stack = [];
    for (let i = 0 ; i < s.length ; i++) {
       let compare = s[i];
       switch(compare){
           case '(' : stack.push(')');
           break;
           case '[' : stack.push(']');
           break;
           case '{' : stack.push('}');
           break;
           default:
               if(compare !== stack.pop()){
                   return false;
               }
       }
    }
    return stack.length === 0;
};
console.log(isValid("(]"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("()[}{}"));