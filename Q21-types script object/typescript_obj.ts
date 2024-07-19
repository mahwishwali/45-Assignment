//Q21- They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//let person_Name :string ='zoya';
//const personName_Array :string[] = ['person','car','cold drink'];

interface  person {
    age :number,
    name:string,
    nationality :string,
    student :boolean,
}
//person object
let person = {
    age : 5,
    name : 'zoya',
    nationality :'pakistan',
    student :true
}
console.log(person);
interface car {
    maker : String,
    color :string,
    automatic :boolean
}
let car = {
    maker :'toyota',
    color :'black',
    automatic :'true'

}
console.log(car);