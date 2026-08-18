const userId = 12345;
let userName = "Kirti Sahu";
var userPass = "354238";
userCity = "Raipur";
let userState;

// userId = 123 // not allowed
console.log(userId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([userId, userName, userPass, userCity, userState]);
