# Synchronus vs Asynchronus Javascript

Javascript is synchronus by default which means that js cannot execute next line of code until current line has been completed.

```js
let a;
let b;
const sumOfTwoNumber = (a, b) => {
  return a + b;
};

console.log(sumOfTwoNumber(2, 3));
```

By default when a function is invoked by engine it adds that function to the stack and the execution starts. If there is another function call in the previous fuction it add that function to the stack and starts to execute it. When the execution of that function is completed it resumes the previous function execution.

### Example

```js
function fn1{
    //code
    //code
    //code
    fn2();
    //code
    //code
}

function fn2{
    //codeFN2
    //codeFN2
    //codeFN2
}

fn1();
```

Here, fn1() function is called. fn1() is added to the stack and execution starts. after executing 3 lines of code fn2() is called so fn2() is now added to the stack and the code inside fn2() starts to execute after all 3 lines of fn2 is execute then the fn1 function resumes again and line 5 and 6 line of fn1 is executed.

## Asynchronus Javascript

According to google, asynchronus means not existing or occurring at the same time. It is same in javascript as well. Since, we know that javascript is synchronus by default we can use ** browser api/web api events or functions ** or ** promises ** to halt the execution sequences of the code or make it asynchronus.
To further understand the asynchronous nature of JavaScript, we will go through callback functions, promises, and async and await.

### Callback

In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function.

```js
console.log("first code");
console.log("second code");

setTimeout(() => {
  console.log("third code");
}, 5000);

console.log("fourth code");
```

```js
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Peter", callMe);
```

Here, setTimeout is a js function which takes two parameters. First parameters as function and second parameter as time in milliseconds. In this the function inside setTimeout is set to be run after 5 seconds. So, the out put of this program will be as follows

```js
first code
second code
fourth code
third code
```

This method was very efficient until some developers need to make mutliple calls. In order to make multiple calls, they began to nest callbacks until they were very diffifult to maintain and read known as ** callback hell **
So, to solve this problem promises were introduced.

### promises

A JavaScript Promise object contains both the producing code and calls to the consuming code. There are two possible out come of promises:

1. Resolve
2. Reject

Promises takes two function as parameter, resolve and reject. Resolve to be success and reject as error.

```js
const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);
```

** JavaScript Promise Chaining **
Promises are useful when you have to handle more than one asynchronus tasks.

```js
let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });
```

** Javascript catch method **

The catch() method is used with the callback when the promise is rejected or if an error occurs. For example,

```js
let x = 0;
let countValue = new Promise(function (resolve, reject) {
  if (x == 0) {
    resolve("Success");
  } else reject("error");
});

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .catch(function errorValue(result) {
    console.log(result);
  });
```

### Async and Await

### Async

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.
The keyword async before a function always returns a promise.

```js
async function test() {
  return 1;
}

test();
```

above code is similar to:

```js
async function test() {
  return Promise.resolve(1);
}

test();
```

Since then function returns a promise, you can use chaining method like this

```js
async function test() {
  return 1;
}

test().then((result) => {
  console.log(result);
});
```

## Await

The await keyword is used inside the async function to wait for the asynchronous operation.

The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example,

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();
```

Here, this function waits for promise to be resolved and then resumes other operation.

## Error Handling

catch method is used for error handeling

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

async function asyncFunc() {
  try {
    let result = await promise;

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
```
