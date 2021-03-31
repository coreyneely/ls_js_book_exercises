/* 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936: */


let number = 4936;
let ones = number % 10;
ones

// Solution= 6

number = (number - ones) / 10;
// solution = 493

let tens = number % 10;
tens;
// solution = 3

number = (number - tens) / 10;
// solution = 49

let hundreds = number % 10;
hundreds;
// solution = 9

let thousands = (number - hundreds) / 10
thousands;
// solution = 4