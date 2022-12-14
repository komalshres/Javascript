# Array

Array is a collection of similar type of data or element under similar variable name. Index inside an array is indexed by numbers called index. Index of an array allows to access the data stored inside array.

## Example

```js
const name = ["Komal", "Rakesh", "Visit"]; // Here index 0, name[0] stores Komal
console.log(name[1]); // Output : Komal
```

## Array Methods

There are two type of array methods:

1. Destructive array methods (alters original array)
2. Non-destructive array methods (doesnt alters original array)

| Destructive | Non-destructive |
| ----------- | --------------- |
| sort        | slice           |
| unshift     | includes        |
| shift       | filter          |
| push        | map             |
| pop         | concat          |
| splice      | join            |

### length

length methods provides length of an array.

```js
console.log(["komal", "rakesh", "visit"].length); // Output : 3
```

### indexOf()

The indexOf() method returns the first index (position) of a specified value and returns -1 if the value isnot found.

```js
console.log(["komal", "rakesh", "visit"].indexOf("visit")); // Output : 2
console.log(["komal", "rakesh", "visit"].indexOf("helllo")); // Output : -1
```

### includes()

The includes() method returns true if a string contains a specified string else returns false
** Syntax **

```
string.includes(searchvalue, start)
```

```js
const greeting = "Hello, This is javascript";
console.log(greeting.includes("Hello"));
console.log(greeting.includes("Hello", 15));
```

### join()

join() returns array as an string

```js
console.log(["komal", "rakesh", "visit"].join(" and ")); // Output : komal and rakesh and visit
```

### pop()

pop() method removes (pops) the last element of an array. pop() method changes the original array and returns the removed element.

```js
let name = ["komal", "rakesh", "visit"];
name.pop(); // Output : visit
console.log(name); // Output : ["komal", "rakesh"]
```

### **push()**

push() method adds new items to the end of an array. push() method changes the length of the array and returns a new array.

```js
let name = ["komal", "rakesh", "visit"];
name.push("sajal", "rupesh");
console.log(name); // Output : ['komal', 'rakesh', 'visit', 'sajal', 'rupesh']
```

### slice

slice() method returns selected elements in an array, as a new array. slice() method selects from a given start, up to a (not inclusive) given end. It doesn't change original array.

```js
let name = ["komal", "rakesh", "visit"];
let name1 = name.slice(0, 2);
console.log(name1); // Output : ['komal', 'rakesh']
```

```js
let name = ["komal", "rakesh", "visit", "hello"];
let name1 = name.slice(-3, -1);
console.log(name1); // Output : ['rakesh', 'visit']
```

### splice

splice() method adds and/or removes array elements.

```
array.splice(index, howmany, item1, ....., itemX)
```

```js
let name = ["komal", "rakesh", "visit"];
name1 = name.splice(0, 2);
console.log(name1); // Output : ['komal', 'rakesh']
console.log(name); // Output : ['visit']
```

```js
let name = ["komal", "rakesh", "visit"];
name1 = name.splice(2, 0, "sajal");
console.log(name); //Output : ['komal', 'rakesh', 'sajal', 'visit']
```

### findIndex

findIndex() method executes a function for each array element.

```js
let arr1 = ["komal", "rakesh", "visit"];
let index = arr1.findIndex((name) => name === "visit");
console.log(index); // Output : 2
```

### isArray

isArray() method returns true if an object is an array, otherwise false.

```js
let arr = ["komal", "rakesh", "visit"];
let checkArray = Array.isArray(arr);
console.log(checkArray); // Output : true
```

```js
let arr = 1;
let checkArray = Array.isArray(arr);
console.log(checkArray); // Output false
```

# Multi-dimensional array

Array in which each element is an array is known as multidimendional array.

### Example

```js
const num = [
  [1, 2, 3],
  [8, 2, 1],
  [7, 2, 0],
];
```

### Accessing multidimensional array

You can access multidimensional array by using the indices

```js
const num = [
  [1, 2, 3],
  [8, 2, 1],
  [7, 2, 0],
];
console.log(num[0][2]); // Output : 3
```

### Iterating over Multidimensional Array

```js
const num = [
  [1, 2, 3],
  [8, 2, 1],
  [7, 2, 0],
];
for (let i = 0; i < num.length; i++) {
  for (let j = 0; j < num[i].length; j++) {
    console.log(num[i][j]);
  }
}
```

### Adding and removing elements to multidimensional array

You can use the Array methods such as push(), pop() and splice() to manipulate elements of a multidimensional array. This is similar to 1D array as shown in examples above.

#### Adding Element to the Outer Array

```js
const num = [
  [1, 2, 3],
  [8, 2, 1],
  [7, 2, 0],
];
num.push([3, 9, 8]);
```

### Adding element to inner array

```js
const num = [
  [1, 2, 3],
  [8, 2, 1],
  [7, 2, 0],
];
num[1][3] = 4;
console.log(num);

Output: [
  [1, 2, 3],
  [8, 2, 1, 4],
  [7, 2, 0],
];
```

#### Remove an Element from a Multidimensional Array

Similar to 1d array you can yo pop to remove element form multi dimensional array as well

```js
const num = [
  [1, 2, 3],
  [8, 2, 1],
  [7, 2, 0],
];
num.pop();
console.log(num);
Returns: [7, 2, 0];
Output: [1, 2, 3][(8, 2, 1)];
```

Note: Similar to 1d array splice can also be used to add or remove element in multidimensional array.

### Other example of multidimensional array

```js
const num = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [2, 3, 4],
    [3, 7, 8],
  ],
  [
    [1, 2, 6],
    [3, 4, 9],
  ],
];

console.log(num[1][1][1]); // Output : 7
```
