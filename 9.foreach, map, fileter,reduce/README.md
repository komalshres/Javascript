# forEach()

forEach method calls a function for each element of array

** Syntax **

```
array.forEach(function(element,index,array){
    return statement
})
```

## Example of forEach

```js
const country = ["Nepal", "India", "China"];
country.forEach((element) => console.log(element));
```

```js
const number = [1, 2, 3, 4];

number.forEach((element) => console.log(element * 3));

console.log(number);
```

# map()

map() creates a new array from calling a function for every array element. map() doesnot change original array.

```js
const number = [1, 2, 3, 4];

let numberMultipliedByThree = number.map((element) => element * 3);

console.log(numberMultipliedByThree);
```

# filter()

filter() method creates a new array filled with elements that pass condition provided by the function

```js
const number = [1, 2, 3, 4];

let numberLessThanThree = number.filter((element) => element < 3);

console.log(numberLessThanThree);
```

```js
const priceList = ["100", "200", "300", "400", "500"];

const filterPriceList = priceList.filter((element) => {
  return element > 100 && element < 400;
});
console.log(filterPriceList);
```

# reduce

reduce() method executes a reducer function for array element. It returns a single value: the function's accumulated result.

** Syntax **

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

## reduce() Parameters

The reduce() method takes in:

1. callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
2. accumulator - It accumulates the callback's return values.
3. currentValue - The current element being passed from the array.
4. initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.

```js
const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
  console.log(accumulator);
  console.log(currentValue);
}

let sum = numbers.reduce(sum_reducer, 0);
console.log(sum); // 21
```
