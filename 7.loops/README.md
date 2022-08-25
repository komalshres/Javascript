# Loops and iteration

In computer programming, a loop is a sequence of instruction s that is continually repeated until a certain condition is reached. Loops offer a quick and easy way to do something repeatedly.
There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times

The various kind of loops provided in javascript are:

1. for
2. while
3. do...while
4. labeled
5. break
6. continue
7. for...in
8. for...of

## for

The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. The for loop consists of three optional expressions, followed by a code block:

1. Initilization
2. Condition
3. Increment or decrement

### syntax

```js
for (initilization; condition; increment / decrement) {
  // code to be executed
}
```

### example

If you need to print all the possible even number from 1-N one way you can do it is creating variable for each even number till N

```js
let even1 = 2;
let even2 = 4;
.
.
.
let evenN = N;
console.log(even1);
console.log(even2);
.
.
.
console.log(evenN);
```

This code will get you the result but it is time consuming and hectic way of doing thing which can simply be solved by suing loop

```js
const evenFn =(n)=> {
    for (let i=1; i <= n, i++){
        if(i % 2===0){
        console.log(i);
        }
    }
}
evenFn(100);
```

```js
const multiplicationTable = (num, iteration) => {
  for (let i = 1; i <= iteration; i++) {
    const mul = num * i;
    console.log(`${num} * ${i} = ${mul}`);
  }
};
multiplicationTable(9, 20);
```

The output of above program is same as the output of previous program but it is done in 8 line of codes. So, you can use for loop when you know the number of iteration before hand.

### COMMON RISK: EXCEEDING THE BOUND OF FOR LOOP

```js
let cars = ["BMW", "Tesla", "Suzuki"];

for (let i = 0; i <= car.length; i++) {
  console.log(car[i]);
}
```

OUTPUT:

```
BMW
Tesla
Suzuki
undefined
```

Here, loop is trying to iterate 4 times while array only has 3 element on it. You can simply solve the problem by changing the condition for loop to run. You can either set the condition to **i<cars.length** or **i<=car.length -1**. The result will be same in both the cases the loop will run equal to the length of array.

## while

while loop executes its statement as long as specific condition is true. If condition evaluates to false, the code in the code block is not executed and the loop ends. The syntax for while loop is as follows

```
while(condition){
    //statement
}
```

Lets us write same program as in for loop to print number of even number till n

```js
const evenFn = (n) => {
  let i = 1;
  while (i <= n) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  }
};
evenFn(100);
```

### do...while

It is similar to while loop but it first executes the statement and then checks thes condition.

```js
const evenFn = (n) => {
  let i = 1;
  do {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  } while (i <= n);
};
evenFn(100);
```

### Difference between while and do...while

| while                                                | do...while                                                 |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| while checks the condition before executing the code | do...while exectues the code and then checks the condition |
| while loop is entry controlled loop.                 | do-while loop is exit controlled loop.                     |
| while(condition){//code;                             | do{//code}while(condition);                                |

### for...in

for in statement loops through the properties of an object

**syntax**

```js
for (key in object) {
  // code block to be executed
}
```

```js
const person = { fname: "John", lname: "Doe", age: 25 };

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
```
