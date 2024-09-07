// # Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3768375397793857n


// Reference(Non primitive)

// Array, objects, Functions

const heros = ["shaktiman", "MS dhoni", "Kohli"];
let myObj = {
    name: "saurabh",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);