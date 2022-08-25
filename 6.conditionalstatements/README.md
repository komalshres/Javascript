# Conditional Statements

## if statement

if statement executes a block of code if the statement is true

```js
if (1) {
  console.log("You are inside the block");
}
if (!1) {
  console.log("Dosent enter block");
}
```

```js
if (0) {
  console.log("error"); // Since 0 is falsy value if statement doesnt execute the block
}
if (!0) {
  console.log("You are inside the block"); 
}
```

## else if

else if statement to specify a new condition if the first condition is false.

```js
let time = 11;
if (time >= 0 && time < 12) {
  console.log("Good Morning");
} else if (time >= 12 && time <= 18) {
  console.log("Good Afternoon");
} else if (time > 18 && time <= 24) {
  console.log("Good night");
} else console.log("Invalid Time");
```

In this loop the result will me **Good Morning** since time = 11 and it falls under first condition. If time was 20 the output would have been **Good night** and if no condition matches it goes to last else and logs Invalid Time in console.

## Nested if

```js
if (num > 10) {
  if (num < 20) {
    console.log("the number is greater than 10 but less than 20");
  }
}
```

```js
let firstYear = "passed";
let secondYearAttendance = 90;

if (firstYear === "passed") {
  if (secondYearAttendance > 80) {
    console.log("you can now attend your exam");
  } else console.log("your attendance is too low");
} else console.log("First pass first year");
```

```js
const oddevenFn = (number) => {
  if (number > 0){
    if (number % 2 == 0){
        console.log(`The number #${number} is even`);
    }
    else console.log(`The number #${number} is odd`);
  }
  else if (number < 0){
    console.log(`The number #${number} is negative`);
  }
  else console.log(`The number #${number} is zero);
};
```

```js
const covidFn = (dose1, dose2) => {
  let covid = [dose1, dose2];

  if (covid[0] === true) {
    if (covid[1] === true) {
      console.log("You are eligible to get booster dose");
    } else console.log("You must get dose 2 first");
  } else console.log("You must get dose one first");
};

covidFn(true, true);
```

## Switch statement

In programming, a switch statement is a control-flow statement that tests the value of an expression against multiple cases. switch statements can have a cleaner syntax over complicated if else statements. Basic syntax of switch statement

```js
swtich (expression){
    case 1:
        //statement 1
        break;
    case 2:
        //statement 2
        break;
        .
        .
        .
    case n:
        //statement n
        break;
    default:
        //default statemnet
        break;
}
```

Here is an example on switch statement

```js
let country = "Nepal";

switch (country) {
  case "China":
    console.log("China is in Asia");
    break;
  case "England":
    console.log("England is in Europe");
    break;
  case "Nepal":
    console.log("Nepal is in Asia");
    break;
  default:
    console.log("Country not in list");
    break;
}
```
