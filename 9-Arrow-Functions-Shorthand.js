/**
 * Explanation : When we need an object and your property name is equals your key name you can use a shorthand.
 */

console.log("9. Arrow Functions")

var list = ['Sergio', 'Carlos', 'Sandro']
function sayGoodBye(name){
    console.log("Good Bye", name)
}

setTimeout(function(){
    console.log('loaded')
},2000)

list.forEach(function(element) {
    console.log(element)   
});

/****************************************************************/

console.log("9. Arrow Functions Shorthand")

sayGoodBye2 = name => console.log('SayGoodBye', name)

setTimeout(() => console.log("Loaded"), 2000)

list.forEach(element => console.log(element))
