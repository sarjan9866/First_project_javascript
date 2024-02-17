const myArr = [0, "Raj", 2, 3, 4, 5];
const myHero = ["true", "null"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]); // print value:Raj
console.log(myHero[1]); // print value:null
console.log(myArr2[1]); // print value: 2

// Array methods

myArr.push(6); // add on last or push in last
myArr.push(7); // add on last or push in last
myArr.push(8); // add on last or push in last

myArr.pop(); // remov on last or removing in last
myArr.pop(); // remov on last or removing in last
console.log(myArr); // print:[0,Raj,2,3,4,5,6,]

//Adding in first and removing in first

myArr.unshift(8); // add on first
myArr.unshift(9); // add on first
myArr.shift(); // remove on first

console.log(myArr); //op: [8,0,Raj,2,3,4,5]

// Question Ask : answer is true or false
console.log(myArr.includes(9)); //op: false
console.log(myArr.indexOf(5)); //op: 5
console.log(myArr); //[0,Raj,2,3,4,5,]

//Chang type

const newArr = myArr.join();
console.log(newArr); //op:0,Raj,2,3,4,5
console.log(myArr); // op:[0,Raj,2,3.4,5]

// slice & splice

//Slice: Do not  change original Array print vall less than one range

const mynew1 = myArr.slice(0, 4);
console.log(mynew1); //op: [0,Raj,2,3]
const mynew01 = myArr.slice(1, 4);
console.log(mynew01); //op: [Raj,2,3]
console.log("original Array", myArr); //OP:[0,Raj,2,3,4,5]

// splics change original Array,vally print  range
const mynew2 = myArr.splice(1, 4);
console.log(mynew2); //op:[Raj,2,3,4]
console.log("original Array", myArr); //op:[0,5]

// Array in side Array
const marvel_heros = ["thor", "Ironman", "samgam"];
const dc_heros = ["superman", "badman", "flash"];

// Array in side Array
marvel_heros.push(dc_heros);
console.log(marvel_heros); // op:[thor,Ironman,samgam,[superman,badman,flash]]

// Array print in same line
const allRero = marvel_heros.concat(dc_heros);
console.log(allRero); // OP: [thor,IronMan,Samgam,superman,badman,flash]

// Array print Same line
const totalHero = [...marvel_heros, ...dc_heros];
console.log(totalHero); //OP: [thor,Ironman,samgam,superman,badman,flash]

//Sprite all array or many in single
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const rearsArr = another_array.flat(Infinity);
console.log(rearsArr); //OP:[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("sarjan")); // OP:false
console.log(Array.from("raj")); //OP:[r,a,j]
console.log(Array.from({ name: "Ram" })); //OP:[]

// convert value into Array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //op:[100,200,300]
