"use strict";
// Q24-More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log("Equality test with strings:", "Apple" === "Apple");
console.log("Inequality test with strings:", "Apple" != "Orange");
// • Tests using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
// • Numerical tests involving equality 
console.log("Equality test with numbers: ", 26 === 26);
// numerical test involving equality
console.log("inequality test with numbers: ", 26 != 35);
// . greater than or equal then
console.log("Greater thewn test: ", 10 > 5);
// Less than test
console.log("less than test", 5 <= 10);
// greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("Less than or equal to test: ", 5 <= 10);
// • Tests using "and"  operators
console.log("And operator test: ", 5 === 5 && 10 > 5);
// Test using "or" operator 
console.log("or operator test:", 5 === 5 && 10 > 5);
// • Test whether an item is in a array
const fruits = ['mango', 'orange', 'pear'];
console.log('Test "pear" in the array: ', fruits.includes("pear"));
// • Test whether an item is not in a array 
console.log('testing "Apple is not in array: ', !fruits.includes('Apple'));
