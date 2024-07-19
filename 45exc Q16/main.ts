//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let moreguestlist=["zainab","sonia","shaista"];
console.log(`${moreguestlist[1]}is not coming`)
moreguestlist.splice(1,1,"anusha")
console.log(`hey everyone! we found a bigger dinner table.lets call some more guests`);
moreguestlist.unshift("sunita")
moreguestlist.push("amna")
let middleguest:number=Math.floor(moreguestlist.length/2);
moreguestlist.splice(middleguest,0,"mariam");
moreguestlist.forEach((moreinvitation)=>
console.log(`hey ${moreinvitation},I would love to catch up over dinner!
    How about joining me for a delicious meal this "saturday"at "8 pm" at "kababist".let me know if you are free!`))
