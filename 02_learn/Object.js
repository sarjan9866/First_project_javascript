// singleton or constructar
// object.create

// object literals
const mySym = Symbol("key1");

const jsUser = {
  name: "sarjan",
  "full name": "sabkholi",
  [mySym]: "mykey1",
  age: 31,
  location: "Nepal",
  email: "sarjan@google",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "saturday"],
};

/*
console.log(jsUser.email); //op:sarjan@google
console.log(jsUser["email"]); //op:sarjan@google
console.log(jsUser["full name"]); //op:sabkholi
console.log(jsUser[mySym]); //op:mykey1

//change

jsUser.name = "Sara";
jsUser["full name"] = "nath";
jsUser.mySym = "mykey2";
(jsUser.age = 33), (jsUser.location = "india");
jsUser.email = "sara@gmail.com";
(jsUser.isLoggedIn = true), //it take this formet
  (jsUser.lastLoginDay = ["sunday", "monday"]);
console.log(jsUser);

// Not Change
Object.freeze(jsUser); // it can freeze or not change
jsUser.name = "Raj";
jsUser["full name"] = "nath";
jsUser.mySym = "mykey3";
(jsUser.age = 33), (jsUser.location = "Nepal");
jsUser.email = "nath@gmail.com";
(jsUser.isLoggedIn = false), //it take this formet
  (jsUser.lastLoginDay = ["tuesday", "monday"]);
console.log(jsUser);  */

// Function
/*
jsUser.greeting = function () {
  console.log("Hello Js user");
};
jsUser.greetingTwo = function () {
  console.log(`Hello Js user ${this.name}`);
};

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo()); */

// singleton or constructar
/*
const tinderUsing = {}; //object literals
console.log(tinderUsing); //{}
const tinderUsers = new Object(); //singleton
console.log(tinderUsers); //{} */

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);  //op:123abc,sammy,false

// this type vale also see
const rerularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sarjan",
      lastname: "sabkholi",
    },
  },
};

// console.log(rerularUser.fullname.userfullname.firstname); // op:sarjan

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = { obj1, obj2 }; //op:{obj1:{1: a,2: b}, obj2:{3,a,4,b}}
//console.log(obj4);

/* const obj5 = Object.assign(obj1, obj2);
console.log(obj5); //op:{1,a,2,b,3,a,4,b} */

/* const obj6 = Object.assign({}, obj1, obj2, obj3);
console.log(obj6); //op:{1,a,2,b,3,a,4,b,5,a,6,b} */

// best formet
/*
const obj7 = { ...obj1, ...obj2 };
console.log(obj7); //op:{1,a,2,b,3,a,4,b}

console.log(tinderUser); //op:{id:123abc,name:sammy,isLoggedIn:false}
console.log(Object.keys(tinderUser)); //op: {id,name, isLoggedIn }
console.log(Object.values(tinderUser)); //op:[123abc, sammy, false ]

console.log(Object.entries(tinderUser)); //op: [id,123abc,], [name,sammy],[isLoggedIn,false]

console.log(tinderUser.hasOwnproperty(isLoggedIn)); //op:True
console.log(tinderUser.hasOwnproperty(isLogged)); //op:false */

const course = {
  coursename: "js in hindi ",
  price: "999",
  courseInstructr: "sarjan",
};

//using the value this ways
// course.courseInstructr;


const { courseInstructr } = course;
console.log(courseInstructr); //OP: sarjan

const { courseInstructr: instuctor } = course;
console.log(instuctor); //OP: sarjan
