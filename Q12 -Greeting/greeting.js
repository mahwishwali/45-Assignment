"use strict";
//Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ['hoorab', 'zoya', 'bisma', 'shaheen'];
const message = 'welcome to typescript class : ';
for (let i = 0; i < names.length; i++) {
    console.log(message + names[i]);
}
