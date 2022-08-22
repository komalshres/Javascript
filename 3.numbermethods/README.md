# Number Methods

The Number constructor contains constants and methods for working with numbers known ad number methods. Values of other types can be converted to numbers using the Number() function. When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN. Below are the list and uses of all the number methods.

## parseInt()

The parseInt() method parses the given string argument and returns an integer number parsed from the string.

```js
let num1 = Number.parseInt("92");
console.log(num1); // Result : 92
let num2 = Number.parseInt("72.98");
console.log(num2); // Result : 72
```

If an integer can't be parsed from the given string, the method returns NaN.

```js
let num = Number.parseInt("@!@!@");
console.log(num); // Result : NaN
```

## toExponential()

The toExponential() method returns a string that represents the exponential notation of the given number. This method accepts fractionDigits as an optional parameter that specifies the number of digits after the decimal point.

```js
let num1 = 2;
console.log(num1.toExponential(2)); // Result : 2.00e+0
let num2 = 200;
console.log(num2.toExponential(3)); // Result : 2.000e+2
```

## toFixed()

The toFixed() method returns a string that represents a number formatted using fixed-point notation. This method accepts an optional parameter that specifies the number of digits to appear after the decimal point. If no parameter is provided, the value of this parameter is treated as 0.

```js
let num1 = 234.345;
console.log(num1.toFixed(2)); // Result : 234.34
let num2 = -783.234;
console.log(num2.toFixed()); // Result : -783
```

## toPrecision()

The toPrecision() method returns a string representing the number to the specified precision. This method accepts an optional parameter that specifies the number of significant digits.

```js
let num1 = 123.453;
console.log(num1.toPrecision(4)); // Result : 123.4
let num2 = -12.34567;
console.log(num2.toPrecision(5)); // Result : -12.345
```

## valueOf()

The valueOf() method returns the primitive value of a Number object.

```js
let num = 123.456;
console.log(num.valueOf()); // Result : 123.456
```

## isFinite()

The Number.isFinite() method determines whether the passed value is a finite number.

```js
console.log(Number.isFinite(1 / 0)); // Result : false
console.log(Number.isFinite(3)); // Result : true
```

## isInteger()

The Number.isInteger() method determines whether the passed value is an integer.

```js
console.log(Number.isInteger(212.32)); // Output : false
console.log(Number.isInteger(2)); // Output : true
```

## isNan()

The Number.isNaN() method determines whether the passed value is NaN and its type is Number.

```js
console.log(Number.isNaN(212.32)); // Output : false
console.log(Number.isNaN(NaN)); // Output : true
```

## isSafeInteger()

The isSafeInteger() method checks whether a value is a safe integer. This method returns a Boolean value (true or false) that indicates whether the given value is a safe integer or not.

```js
console.log(Number.isSafeInteger(212.32)); // Output : false
console.log(Number.isSafeInteger(23231)); // Output : true
```

## parseFloat()

The parseInt() method parses the given string argument and returns a floating-point number parsed from the string.

```js
console.log(Number.parseFloat("212.32")); // Output : 212.32
console.log(Number.parseFloat("2 Hello there")); // Output : 2
```

## toLocaleString()

The JavaScript toLocaleString() method returns a string with a language-sensitive representation of a number.

```js
console.log((12312312.321).toLocaleString("en-IN")); // Output : 1,23,12,312.321
console.log((12222.2112).toLocaleString("zh-Hans-CN-u-nu-hanidec")); // Output : 一二,二二二.二一一
```

## toString()

The toString() method returns the given number in the form of a string.

```js
let num = 213;
console.log(num1.toString()); // Output : 213
console.log(typeof num1.toString()); // Output : string
```
