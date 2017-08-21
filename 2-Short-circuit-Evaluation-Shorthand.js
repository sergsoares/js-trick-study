/* Explanation 
    In js we need validate null, undefined and '' (empty String) for it we can use Short Circuit Evaluation
*/

console.log("2. Short-circuit Evaluation Shorthand")

var answer;
if(answer !== null || answer !== undefined || answer !== ''){
    var message = answer;
}

console.log(message)

/****************************************************************/
console.log("2. Short-circuit Evaluation Shorthand - ES6")

const falsy = [false, null, undefined, 0, NaN, '', ""]
var answer2;
const message2 = answer2 || 'nothing'

console.log(message2)



