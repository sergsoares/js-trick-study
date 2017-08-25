/**
 * Explanation : When we need an object and your property name is equals your key name you can use a shorthand.
 */

console.log("8. Object Property")

var id = 2312
var first_name = "Sergio"
var last_name = "Antonio"

//I need create an object to wrap this data.

const obj = {
    id: id,
    first_name :first_name,
    last_name: last_name
}

console.log(obj)

/****************************************************************/

console.log("8. Object Property - Shorthand ")

var cod = 43443
var name = "paulo"
var age = 34

const object = { cod, name, age, obj}

console.log(object)