// simple function
/*
function sayMyname() {
  //sayMyname=function name
  console.log("s");
  console.log("a");
  console.log("r");
  console.log("j");
  console.log("a");
  console.log("n");
}
sayMyname(); //sayMyname=Reference,()=exuction
*/

//addNum= functin name,num1 & num2 = parameter 3,4 = Argument
// simple functio 2 or add 2 number

function addNum(num1, num2) {
  console.log(num1 + num2);
}
// addNum(3, 4);         //OP:7
//addNum(3, "4");     //OP:34 it think 4 string    then 3 also take string
// addNum(3, "a");       //op:3a
//addNum(3, null);         //op:3

//  const results = addNum(3, 5);
//  console.log("result: ", results);      //op: undefined

// another aways function
/*
function addNum(num1, num2) {
  let result = num1 + num2;
  console.log("Sabkholi"); // before return console work  OP: Sabkholi
  return result;
  console.log("sarjan"); // after return console not work   OP:No result
}
const result = addNum(3, 5);
console.log("result: ", result); // op: result: 8
*/

function addNum(num1, num2) {
  return num1 + num2;
}
const result = addNum(3, 5);
// console.log("result: ", result);    //OP: result: 8

function loginUserMessage(username) {
  return `${username} just logged in `;
}
//console.log(loginUserMessage());          //OP: undefined just logged in
//console.log(loginUserMessage("sarjan"));  // Op: sarjan just logged in

// check if else condition

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in `; //Not working below the return
}

//console.log(loginUserMessage()); // OP:undefined
// console.log(loginUserMessage("sarjan")); // OP: sarjan just logged in

// same formate but operate change
/*
function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
}
console.log(loginUserMessage());
*/

//if all passing value
/*
function loginUserMessage(username = "Bahadur") {
  //we are not going if block bz username already defined
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in `;
}
console.log(loginUserMessage()); //OP: Bahadur just logged in
*/
// Value over wright
/*
function loginUserMessage(username = "Bahadur") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in `;
}
console.log(loginUserMessage("sarjan")); //OP: sarjan is just logged in
*/
