const accountId = 144553
let accountEmail = "saurabh123@google.com"
var accountPassword = "12345"
accountCity ="Jaipur"

// accountId =2 // not allowed

accountEmail = "golu@gmail.com"
accountPassword = "7634623"
accountCity ="Sitamarhi"
let accountState;

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
 