"use strict";
//Q17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list.
//Print your list to make sure you actually have an empty list at the end of your program.
let Guest_list = ['Imran khan', 'shahid Afridi', 'Waseen ikram'];
let absent_Guest = 'Imran khan';
let new_Guest = 'Kamran tesorri';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear MR.' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Mr.${'absent_Guest'}is not coming to the party.`);
console.log(`Good New! we find big table so we are invitied 3 more guests.`);
Guest_list.unshift('sir zia khan');
Guest_list.splice(2, 0, 'sir hamza syed');
Guest_list.push('sir Ameen alam');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear mr. ' + Guest_list[i] + ',\n\nyou are still invited.\n\nThank you!\n\n');
}
console.log('\nsorry we can not arrange big table,only two people will be invited.');
//yahan pr main ne guest remove kiya hai
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`sorry Mr. ${remove_Guest},you are not invited for dinner`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nyou are still invited.\n\nThankyou!\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
