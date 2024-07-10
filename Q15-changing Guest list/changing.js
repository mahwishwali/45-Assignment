"use strict";
//Q15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let Guest_list = ['imran khan', 'wasim akram', 'shahid afridi'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ', \n\nIt is our  pleasure to invite you in our party . \n\n thankyou!\n\n');
}
let absent_Guest = 'Imran khan';
let new_Guest = 'kamran Tessori';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ', \n\nIt is pleasure to invite you in our party . \n\n thankyou!\n\n');
}
console.log(`Mr.${absent_Guest} is not coming to party.`);
