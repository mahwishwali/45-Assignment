"use strict";
let Guest_list = ['Imran khan', 'shahid Afridi', 'Waseen ikram'];
let absent_Guest = 'Imran khan';
let new_Guest = 'Kamran tesorri';
Guest_list[0] = new_Guest;
///console.log(`Mr.${'absent_Guest'}is not coming to the party.`);
// console.log(`Good New! we find big table so we are invitied 3 more guests.`);
Guest_list.unshift('sir zia khan');
Guest_list.splice(2, 0, 'sir hamza syed');
Guest_list.push('sir Ameen alam');
///for (let i = 0; i < Guest_list.length; i++) {
// console.log('Dear mr. ' + Guest_list[i] + ',\n\nyou are still invited.\n\nThank you!\n\n');
//}
// console.log('\nsorry we can not arrange big table,only two people will be invited.');
//yahan pr main ne guest remove kiya hai
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    // console.log(`sorry Mr. ${remove_Guest},you are not invited for dinner`);
}
//for (let i=0;i<Guest_list.length; i++){
//  console.log('Dear Mr. '+Guest_list[i] + ',\n\nyou are still invited.\n\nThankyou!\n\n')
//}
Guest_list.splice(0, 2);
console.log(Guest_list);
//exercise 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are : ${Guest_list.length}`);
