/**
 * Explanation :
 */

console.log("5. JavaScript for Loop Shorthand")

var allImgs = [0,1,2,3,5,6,7]

for(let i = 0; i < allImgs.length; i++ ){
    console.log(i)
}

/****************************************************************/
console.log("5. JavaScript for Loop Shorthand - ShortHand")

var allImgs2 = [7,6,5,4,3,2,1]

for(let index in allImgs2){
    console.log(index + " - " + allImgs2[index]);
} 

/****************************************************************/
console.log("5. JavaScript for Loop Shorthand - ShortHand")

var allImgs3 = [3,4,3,4,6,3,4,3,3]

var printArray = (element, index, array) => {console.log(element + " - " + index)}
allImgs3.forEach(printArray);
