# VAR

```js
console.log(a); //Result = UNDEFINED because Var declaration is **hoisted** and initialized in top level.
var a;
var a = 5;
console.log(a); //Result = 5
var a = 6;
console.log(a); //Result = 6 because var can be **reinitilized** and **redeclared**.
```

```js
const anyVar = () => {
  x = 3;
  if (x > 0) {
    var result = "X is a positive integer";
    console.log(result);
  }
  console.log(result);
};

anyVar();
```

# LET

```js
console.log(a); //Error in initialization. JS doesn't initilize let at top level like in var.
let a;
let a = 5;
console.log(a); //Result = 5. Declared in above line.
a = 6;
console.log(a); //Result = 6. Let can be updated.
let a = 7;
console.log(a); // Error. Let cannot be redeclared.
```

# CONST

```js
console.log(a);       //Error in initialization. JS doesn't initilize const at top level like in var.
const a;
const a = 5;
console.log(a);      //Result = 5. Declared in above line.
a = 6;
console.log(a);      //Error. Const canot be updated.
const a = 7;
console.log(a);      // Error. Const cannot be redeclared.
```

# SCOPE OF VAR, LET, CONST

# VAR

```js
var firstName = "Komal";
const lastName = () => {
  var lName = "Shrestha";
  console.log(firstName); //Result = Komal. Global variable var is accessible inside of a fucntion.
};
console.log(lName); //Error. Var defined inside of the function isn't accessible outside of a function.
firstName();
```

```js
var greet = "Hello";
var time = 13;

if(time >= 12 && time <= 18){
  var greet = "Good Afternoon";
}
console.log(greet); //Result = Good Afternoon. This is the problem with var. It redefines the value of var in local scope as well as global scope.
}
```

# LET

```js
let greet = "Hello";
let time = 13;

if(time >= 12 && time <= 18){
  let greet = "Good Afternoon";
  console.log(greet); //Result = Good Afternoon. Since, let has been declared in this block.
}
console.log(greet); //Result = Hello. Let is block scoped. The let defined in then above block isnnot accessible outside of the block.
}
```

# CONST

1. Similar to let scope of const is block scpoed.

## Differences of var, let & const

| Var                                                                                  | Let                                                     | Const                                                     |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------- | --------------------------------------------------------- |
| > Var is hoisted at top level of their scope and initilized with the value undefined | > Let value is not initizlied at top level as undefined | > const value is not initizlied at top level as undefined |
| > Var is local/functional scoped.                                                    | > Let is block scoped.                                  | > Const is block scoped.                                  |
| > Var can be redeclared                                                              | > Let can be updated but cannot be redeclared           | > Const cannot be redeclared                              |
| > Var can be reinitilized                                                            | > Let cannot be reinitialized                           | > Const cannot be reinilialized                           |
