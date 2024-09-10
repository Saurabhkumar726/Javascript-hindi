// singleton
// object.create


// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "saurabh",
    "full name": "saurabh kumar",
    [mySym]: "mykey1",
    age: 23,
    location: "sitamarhi",
    email: "saurabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mobday", "Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email ="saurabh@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "saurabh@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting);
console.log(Jsuser.greetingTwo());