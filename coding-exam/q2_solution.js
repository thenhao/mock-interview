/*
The modulo operator (%) is used to get the remainder that is left when dividing two numbers.
Ex1: 10 % 2 -> 0
Ex2: 100 % 6 -> 4
Create a function that emulates the operation WITHOUT using the % operator
Specifications:
1. The function should take in two values and return the remainder
2. The % operator CANNOT be used.
*/

function modulo(num1, num2){
    let quotient = num1 / num2;
    let quotient_without_decimal = parseInt(quotient);

    return (num1 - (quotient_without_decimal * num2));
}

console.log(modulo(100, 5));
console.log(modulo(100, 7));