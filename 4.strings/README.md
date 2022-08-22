# String

The String object is used to represent and manipulate a sequence of characters.In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.

1. "Komal"; // Double quote
2. 'Komal'; // Single quote
3. \`Komal\`; // Backtick

Single quotes and double quotes are practically the same and you can use either of them. Backticks are generally used when you need to include variables or expressions into a string.

In js strings are case sensitive which means that lowercase and uppercase string are treated as different value.

```js
console.log("a" === "A"); // Output = false
```

## String Methods

### length

Returns the number of characters in a string

```js
console.log("Komal".length); // Output : 5
```

### replace()

replace a substring/pattern in the string

#### replace() Parameter

repace takes two parameters

1. pattern
2. replacement

```
str.replace(pattern, replacement)
```

```js
console.log("This is fun".replace("This", "JS")); // Output : That is fun
```

### indexOf()

Returns the first index of occurrence of a value

```js
console.log("Hello".indexOf("e")); // Output : 1
```

#### indexOf parameters

indexOf takes two parameters

1. Search value
2. from Index

```
str.indexOf(searchValue, fromIndex)
```

```js
console.log("banana".indexOf("a", 4)); //Output : 5
```

#### lastIndexOf()

Returns the last index of occurrence of a value
Similar to indexOf , lastIndexOf also takes two parameters

1. Search value
2. from Index

```
str.lastIndexOf(searchValue, fromIndex)
```

```js
console.log("banana".lastIndexOf("a", 4)); //Output : 3
```

#### startsWith()

Checks if a string begins with a specified string

startsWith takes two parameters

1. Search string
2. Position

```
str.startsWith(searchString, position)
```

```js
console.log("Javascript is fun".startsWith("Java")); // Output : true
console.log("Javascript is fun".startsWith("script")); // Output : false
console.log("Javascript is fun".startsWith("script", 4)); // Output : true
```

#### endsWith()

Checks if a string begins with a specified string
endssWith takes two parameters

1. Search string
2. Position

```
str.endsWith(searchString, position)
```

```js
console.log("Javascript is fun".endsWith("fun")); // Output : true
console.log("Javascript is fun".endsWith("f")); // Output : false
console.log("Javascript is fun".endsWith("script", 15)); // Output : true
```

#### toUpperCase()

Returns uppercase of a string

```js
console.log("hello".toUpperCase()); // Output : HELLO
```

#### toLowerCase()

Returns lowercase of a string

```js
console.log("HELLO".toLowerCase()); // Output : hello
```

#### concat()

Concatenates the arguments to the calling string

```
str.concat(str1,.....,str n)
```

```js
let newString = "";
let concatedString = newString.concat("JS", " is", " Fun");
console.log(concatedString); // Output : JS is Fun
```

#### substring()

Returns a specified part of the string

substring syntax

```
str.substring(indexStart, indexEnd)
```

```js
console.log("Javascript is fun".substring(4, 10)); // Output : script
```

#### search()

Searches for specified value in the string

```js
console.log("Javascript is fun".search("fun")); // Output : 14
console.log("Javascript is fun".search("java")); // Output : returns -1 since java couldn't be found
```

#### replace()

Returns string by replacing all matching patterns

**replace syntax**

```
str.replaceAll(pattern, replacement)
```

```js
console.log(
  "Javascript is fun. Javascript is good".replaceAll("Javascript", "JS")
); // Output : JS is fun. JS is good
```

#### split()

Returns the string divided into list of substring

```js
console.log("www.facebook.com".split(".")); // Output : ['www', 'facebook', 'com']
```

Syntax

```
str.split(separator, limit)
```

```js
console.log("www.facebook.com".split(".", 2)); // Output : ['www', 'facebook']
```

#### trim()

Removes whitespace from both ends of a string

```js
console.log("    Hello, I am trimmed    ".trim()); // Output : Hello, I am trimmed
```

#### slice()

Extracts and returns a section of the string

slice syntax

```
str.slice(beginIndex, endIndex)
```

```js
console.log("Let us slice this".slice(6, 12)); // Output : silce
console.log("Let us slice this".slice(-10, -4)); // Output : silce
```

## Temperate Litreals

Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions. Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

```js
let firstName = "Komal";
let lastName = "Shrestha";
console.log(`Hello, ${firstName} ${lastName}`);
```
