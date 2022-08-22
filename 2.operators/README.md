# OPERATORS

## Arithmetic Operators

Arithmetic operators perform arithmetic on numbers. An arithmetic operator accepts numerical values as operands and returns a single numerical value. The numerical values can be literals or variables.

| Operators              | Discription                                                                                                                                    | Example                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Additional(+)          | The addition operator (+) produces the sum of numeric operands or string concatenation.                                                        | 2 + 2 = 3 , "Komal" + " " + "Shrestha" = Komal Shrestha |
| Subtraction(-)         | The subtraction operator (-) subtracts the two operands, producing their difference.                                                           | 3 - 2 = 1                                               |
| Multiplication(\*)     | The multiplication operator (\*) produces the product of the operands.                                                                         | 3 \* 2 = 6                                              |
| Division (/)           | The division operator ( / ) produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor. | 6/3 =2                                                  |
| Modulus/Remainder (++) | The modulus operator, denoted by %, is an arithmetic operator. The modulo division operator produces the remainder of an integer division.     | 3 % 2 = 1                                               |
| Exponential (\*\*)     | The exponentiation operator ( \*\* ) returns the result of raising the first operand to the power of the second operand.                       | 3 \*\* 2 = 9                                            |
| Increment (++)         | Increment Operators are the unary operators used to increment or add 1 to the operand value.                                                   | let i= 1; i++ Result : 2                                |
| Decrement (--)         | Decrement Operators are the unary operators used to decrease the operand value by 1.                                                           | let i= 2; i-- Result : 1                                |

## Logical Operators

Logical operators are used to determine the logic between variables or values. Logical operators perform logical operations: AND, OR and NOT.

| Operators        | Discription                                                                              | Example                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Logical AND(&&)  | If the value of both the operand are true logical AND returns true else it returns false | true && true // Ture , true && false // False , // (6 > 2 && 6 < 8> ) is True       |
| Logical OR(\|\|) | If the value of one of the operand is true it returns true else it returns false         | true \|\| false // Ture , false \|\|false // False , // (6 > 2 \|\| 6 > 8 ) is True |
| Logical NOT (!)  | If the value of operand is true it returns false and vice-versa                          | !true // False , !false // True                                                     |

## Precedence and Associativity

### Precedence

Precedence refers to the priority given to the operators while parsing a statement that has more than one operators. Operators with higher priority are resolved first.

### Example

```js
let x = 3 + 5 * (2 + 3);
console.log(x);
```

Here with our precedency the result of this expression would have been 40. But the correct result of this expression is 28. Since, precedency of grouping/bracket is higher than that of addition and multiplication, bracket is resolved first which gives us. // 3 + 5 \* 5 . Now, according to precedency order multiplication is solve and addition is done after that. Which gives the final output as 28.

### Associativity

If same operator appears one or more times in an expression, in which direction the specific operator(s) need to be evaluated. It is known as associativity. Associativity in general states that irrespective of the order of operands for a given operation the result remains the same.

## Precedence and associativity table

In the below table the level of precendency is shown in decending order. The operator in the begining has higher precendency and as the table goes down the priotiry decreases.

| Operator          | Associativity |
| ----------------- | ------------- |
| Grouping/ Bracket | Left-Right    |
| Unary             | Right-Left    |
| Multiplicative    | Left-Right    |
| Additive          | Left-Right    |
| Shift             | Left-Right    |
| Relational        | Left-Right    |
| Equality          | Left-Right    |
| Bitwise           | Left-Right    |
| Logical           | Left-Right    |
| Conditional       | Left-Right    |
| Assignment        | Right-Left    |
| Comma             | Left-Right    |
