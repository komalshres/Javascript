// //Number
// const number = 2;
// console.log(number);

// //string
// const firstName = "Komal";
// const lastName = "Shrestha";
// console.log(firstName + " " + lastName);

// const str = "21";
// console.log(str, typeof str);

// //Undefined
// let undef;
// console.log(undef);

// //object
// let obj = {
//   name: "Komal",
//   age: 25,
//   isAwake: true,
//   job: null,
// };

// console.log(obj.isAwake);

console.log(a);
var a;

var a = 5;
console.log(a);

//console.log(b); //hoisting is not supported in let
let b = 1;
// let b = 3; // Error : redeclaration in let is not possible
console.log(b);
b = 6;
console.log(b);

//console.log(PI); // No hoisting
const PI = 3.14;
console.log(PI);
// PI = 2.14; // Error : reassignment in const

const scope = () => {
  var number = 10;
  console.log(number);
};

scope();

//console.log(number); var inside local scope, cant console log here

var fName = "Komal";
var age = "26";
if (age > 25) {
  var fname = "You are old";
  var greet = "Hello";
}
console.log(fname, greet); // var is functional/local or globally scoped

let firstName = "Komal";
let newAge = "26";
if (newAge > 25) {
  let firstName = "Shrestha";
  // firstName = "Nik";
  let old = "You are old";
  console.log(old);
  console.log(firstName);
}
console.log(firstName);

// console.log(old); // let is block scope
