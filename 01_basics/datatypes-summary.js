//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);
console.log(typeof anotherId);
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}



// https://262.ecma-international.org/5.1/#sec-11.4.3

//*********************************************************

/* stack memory and heap memory difference and method 
in stack it will return the copy of data from memory ( or we can say it call by value method)
in heap it will give you the exact data which is in heap memory (or we can say it call by reference method)*/

let explName = "parvej";
let anotherName = explName;
anotherName = "amarjit";
console.log(anotherName);
/*here we have used the call by value method
Please note in stack memory we have explName = "parvej" and
another name firstly was parvej but we have assign "amarjit" so memory replaced the parvej with amarjit name*/

/*--now we see HEAP MEMORY EXAMPLE--*/

let oneObj = {
    userName : "sam",
    email:"sam@bahadur.org"
};

let secondObj = oneObj;
secondObj.email="hhhhhhhhhhhhhh@gmail.com"
console.log(oneObj.email);
console.log(secondObj.email);

/* This is a example of HEAP MEMORY ( when i have changed the secondObj email, it directly has removed the previos memory data thats why output is"hhhhhhhhhhhhhh@gmail.com" that is call by reference method)*/