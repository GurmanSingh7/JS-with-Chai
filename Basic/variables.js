const accountID = 233769
let accountEmail = "Garrys-Dev-Team.com"
var accountPassword = "654345"
accountCity = "California"

let accountState;

// accountID = 765435 - This is not allowed for const variable

accountEmail = "GarryDevTeam1.com"
accountPassword = "87654"
accountCity = "New York"



/*
Prefer not to use var as variable
because in issue in block scope and in functional scope
*/


console.table([accountID , accountEmail , accountPassword , accountCity , accountState])

// console.log(accountID);