# Object

The object is one of the most useful data structures in JavaScript - a collection of associated key/value pairs. In JavaScript, an object is a standalone entity, with properties and type. An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

## Literals and properties

We can immediately put some properties into {...} as “key: value” pairs:

This above example of cup can be written as:

```js
const cup = {
  color: "White",
  design: "Tumbler",
  material: "Stainless Steel",
};
```

A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
In the cup object there are three properties : color , design and material which are the key of the object and their value are white, tumbler and stainless steel respectively.

## Accessing, removing or adding property of object

We can access each and every element of the object cup. Property value can be accessed by dot notaion or [].
Example:

```js
console.log(cup.color);
console.log(cup["design"]);
console.log(cup.material);
```

The value can be of any type, let us add boolean to the object cup

```js
cup.isBroken = false; // Returns : False
```

To remove the property of object, we can use delete

```js
delete cup.color; // Returns : True
```

Multi word property name also can be used

```js
const person = {
    name : "Ram",
    "likes tea" : true,
}
console.log(person.likes tea); // SyntaxError: missing ) after argument list (dot notation cannot be used of the property name is multo word )
console.log(person["likes tea"]) // In this case this notation must be used to access the object property
```

## Nested Objects

```js
const student = {
  name: "John",
  age: 20,
  marks: {
    science: 70,
    math: 75,
  },
};

console.log(student.marks.science); // accessing property of marks object inside student object
```

## Methods inside objects

Function can also be used as value of object

```js
const person = {
  name: "Ram",
  age: 21,
  // function as value of object property
  greet: function () {
    console.log("hello");
  },
};
person.greet();
```

## JavaScript this Keyword

To access a property of an object from within a method of the same object, you need to use the this keyword.

```js
const person = {
  name: "Ram",
  age: 21,
  // function as value of object property
  greet: function () {
    console.log(`Hello, My name is ${this.name}`); // if this key work is not used and simply {name} is used here we get an error. (ReferenceError: name is not defined)
  },
};
person.greet();
```

However, the variable inside the function can use its varibal in similar way as a normal function would. For example,

```js
const person = {
  name: "Ram",
  age: 21,
  // function as value of object property
  greet: function () {
    let message = "Welcome to my function";
    console.log(`Hello, My name is ${this.name}. ${message}`);
  },
};
person.greet();
```

## Object() constructor function

The above cup examplecan also be used as

```js
function Cup() {
  this.color = "White";
  this.design = "Timbler";
  this.material = "Stainless Steels";
}

var cup1 = new Cup();
console.log(cup1);
```

## for in

## for of
