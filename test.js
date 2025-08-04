// console.log("hello world");

// var num=20 //depreciated

// let num2=30

// const num3=50

// console.log(num, num2, num3);

// num=40;
// var num=60

//  num2=70

//  num3=100

// console.log(num, num2, num3);


// // Datatypes
// const name= `John Doe`;
// const age = 25;
// const isStudent = true;
// const hobbies=null;
// const address= undefined;
// const score= Symbol("unique");
// const bigIntValue = 1234567890123456789012345678901234567890n;

// console.log("type of name is ", typeof(name)); 
// console.log("type of age is ", typeof(age));
// console.log("type of isStudent is ", typeof(isStudent));
// console.log("type of hobbies is ", typeof(hobbies));
// console.log("type of address is ", typeof(address));
// console.log("type of score is ", typeof(score));
// console.log("type of bigIntValue is ", typeof(bigIntValue));

// const name= "11111"
// console.log(typeof(name)); // string

// const a="1"
// const b=4

// const c= Number(a)
// const d= String(b)


// console.log(typeof(c)); // number
// console.log(typeof(d)); // string

// const firstName="sandesh   magar"
// const lastName="Thapa"

// const fullName= firstName +" "+ lastName
// console.log(fullName); // sandeshThapa`

// console.log(`${firstName} is my firstname and ${lastName} is my lastname`)

// console.log("the lengh of the firstname is ", firstName.length);
// console.log("character at index 2 is ", firstName.charAt(2));
// console.log("adding two strings ", firstName.concat(" ", lastName));
// console.log("e is included in firstName ", firstName.includes("z"));
// console.log("index of s in firstName is ", firstName.lastIndexOf("s"));
// console.log("name starts with s ", firstName.startsWith("s"));
// console.log("name ends with a ", firstName.endsWith("a"));
// console.log("sliced name is ", firstName.slice(-3));
// console.log("sliced using substring ", firstName.substring(1,4));
// console.log("firstname in uppercase ", firstName.toUpperCase());
// console.log(firstName.trim()); // removes whitespace from both ends
// console.log(firstName.repeat(10)); // repeats the string 10 times
// console.log(firstName.replace("magar", "Thapa")); // replaces 'magar' with 'Thapa'

// const splitting="red$green$blue".split("$")
// console.log(splitting); // ['red', 'green', 'blue']

// console.log("my name is sandesh.\n I am a student \tof BCA. I am from Nepal\".") // splits the string into an array of words


const a=111
const b="111"

// console.log(a=b)
console.log(a==b); // true, because == checks for value equality
console.log(a===b); // false, because === checks for both value and type equality


const age=20;

age>=18 ? console.log("You are an adult") : age>=13 ? console.log("You are a teenager") : console.log("You are a child");

console.log(12+true)