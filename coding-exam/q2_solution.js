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
    let quotient = num1 / num2; //Quotient can have decimal values
    let quotient_without_decimal = parseInt(quotient); //parseInt forces quotient to remove decimal values
    //Difference between Number and Integer is that numbers can have decimals (ex. 1.57) and integers are just whole numbers (1)

    return (num1 - (quotient_without_decimal * num2));
    //ex. 10 and 3, 10 / 3 is 3.333333...
    //so parseInt(3.3333) will give us 3
    //quotient_without_decimal * num2 is 3*3 = 9
    //remainder is num1 - the number above
    //10 - 9 -> 1
}

console.log(modulo(100, 5)); //0
console.log(modulo(100, 7)); //2 (14*7 = 98, 100 - 98 -> 2)