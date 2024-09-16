
function sayMyName(){
console.log("S");
console.log("A");
console.log("U");
console.log("R");
console.log("A");
console.log("B");
console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1,  number2){
//     console.log(number1 + number2); }

    function addTwoNumbers(number1,  number2){
        // let result = number1 + number2
        // return result
        return number1 + number2
    }
    


const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} justlogged in`
}

// console.log(loginUserMessage("saurabh"))
// console.log(loginUserMessage("saurabh"))

function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "saurabh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username: "sam",
    price: 399

})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));

