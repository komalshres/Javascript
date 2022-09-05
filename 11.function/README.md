# Function

Javascript function is a block of code designed to perform particular task.
Function consist of function key work followed by function name, parameter and code to be executed.

**syntax**

```js
function functionName(parameter1, parameter2, ....., parameterN){
    //code to be executed
}
```

## Simple function to multiply two number

```js
function multiplyTwoNumber(num1, num2) {
  return num1 * num2;
}

multiplyTwoNumber(3, 10);
```

## Calling a function

## Anonymous function

While the function declaration above is syntactically a statement, functions can also be created by a function expression. Such function can be called anonymous function. Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

```js
function(){
    //code here
}
```

An anonymous function can be accessed by storing it in a variable as funciton as a value. AN anonymous function can also have nultiple arguments, but only one expression.

```js
const square = function (number) {
  return number ** 2;
};
const x = square(4);
```

## Call by value

If a function is called by directly passing a value as an argument, it is known as pass by value. This is true for all value having primitive data type.

```js
let number = 3;
function sqrt(numberSquare) {
  numberSquare *= numberSquare;
  console.log(numberSquare);
}
sqrt(number);
console.log(number);
```

## Call by reference

When a variable's reference/address is passed as an argument of the function, this is known as call by reference. This true for all value having non-primitive data type.

```js
const number = [1, 2, 3, 4, 5, 6];

function callByReference(reference) {
  reference[1] = 10;
}

callByReference(number);
console.log(number);
```

### First class citizen

A programming language is said to have First-class functions when functions in that language are treated like any other variable.JavaScript treats functions as first-class citizens, enabling functions to operate similarly to any other data type such as strings, arrays, objects, and so on.

These are some of the operations that can be performed on functions when treated as first-class citizens:

1. Assign them to variable
2. Set them as object property
3. Store them in arrays
4. Use them as an argument to a function or as return from a function

As you can see, higher-order functions are only possible because functions are considered first-class citizens in functional programming.

## Higher order function

Function which takes another function as an argument or returns a function is known as higher order fucntion. In JS, functions are treated as first-class citizen. We can treat function as value and assign them to another fucntion, we can pass function as an argument to another function or even return a function from a function.

### Passing function as argument to another function

```js
// program to pass a function as a parameter

function greetMessage() {
  return "Good Morning";
}

// passing function greet() as a parameter
function greet(user, func) {
  // accessing passed function
  const message = func();

  console.log(`${message} ${user}`);
}

greet("Ram", greetMessage);
```

In above example, greet() is a higher order function as it takes func() as an argument.

## Function that returns another function

## IIFE(Immediately Invooked Function Expression)

When you run a javascript code, functional statement goes through creation phase where they are prepared to execute but aren't run yet. This happens in execution phase when function is callled. But sometimes, we dont want function to wait to be exectuted. This is where IIFE comes in it helps to immediately invoke the function. An IIFE is nothing more than a function that is called once and it's called right away.

```js
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

**Example**

```js
((name) => `Good Morning, ${name}`)("Komal");
```

## Function Expression

Functional expression is a syntax for creating a funciton. It allow us to create a new function in middle of any expression.

**Example**

```js
let greet = function (name) {
  alert(`Hello ${name}`);
};
```
