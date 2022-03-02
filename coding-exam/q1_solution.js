/*
Create a function that check if a year is a leap year or not. 
Part of the exercise is to research how to compute for leap year.
Specifications:
1. The program should be able to get inputs from the console.
2. The program should only take in POSITIVE integer values. Include checks for the input values.
3. The program should output using the following format:
    "<Year> is / is not a leap year"
    Ex1. 2004 is a leap year.
    Ex2. 1999 is not a leap year.
    Ex3. 1900 is not a leap year.
    Ex4. 2000 is a leap year.
*/

let year = Number(prompt("Please enter a year"));

//Conditions for leap year:
/*
1. Divisible by 4, and not divisible by 100 (1996, 2004, 2020, etc)
2. If divisible by 4 and 100, should be divisible by 400 (2000, 2400, etc)
*/

if(year > 0){
    if(year % 4 == 0 && year % 100 !== 0  || year % 400 == 0){
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
} else {
    console.log("Invalid input");
}
