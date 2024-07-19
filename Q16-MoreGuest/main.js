"use strict";
//Q16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to d
//.Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages,
//one for each person in your list.
let guest_list = ['Imran khan', 'shahid Afridi', 'Waseen ikram'];
let absent_Guest = 'Imran khan';
let new_Guest = 'Kamran tesorri';
guest_list[0] = new_Guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear MR.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our parseMIMEType.\n\nThank you!\n\n');
}
console.log(`Mr.${absent_Guest}isnot coming to the party.`);
console.log(`Good New! we find big table so we are invitied 3 more guests.`);
guest_list.unshift('sir zia khan');
guest_list.splice(2, 0, 'sir hamza syed');
guest_list.push('sir Ameen alam');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you to our party.\n\nThank you!\n\n');
}
