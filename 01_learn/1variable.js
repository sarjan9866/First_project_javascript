const accountId = 144553;
let accountEmail = "sarajan@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState; // undifined

// we not use var because of issue in block scop {} and function , we use const & let

// accountId = 2;  // not allowed
accountEmail = "sara@gmail.com";
accountPassword = "12232342432";
accountCity = " India ";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]); // op:144553,sara@gmail.com.12232342432, India, undefined
