/**
 * Explanation : You can validate if a variable is Trusty or Falsy in JS
 */

console.log("4. If Presence Shorthand");

const hasData = true
if(hasData === true){
    console.log("HasData")
}

/****************************************************************/

console.log("4. If Presence Shorthand - Short")
const hasData2 = true
if(hasData2){
    console.log("HasData2")
}

console.log("Array of Falsy Values")
const falsy = [false, null, undefined, 0, NaN, '', ""]
for(pos in falsy){
    console.log(falsy[pos])
    console.log(typeof(falsy[pos]))
    if(!falsy[pos]){
       console.log("is false")     
    }
}