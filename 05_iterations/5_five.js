const coding =["js", "rb", "py", "cpp", "python"]

// coding.forEach( function (val) {
//     console.log(val);

// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileNmae: "js"
    },
    {
        languageName: "Java",
        languageFileNmae: "java"
    },
    {
        languageName: "python",
        languageFileNmae: "py"
    },
]

myCoding.forEach(  (item) => {

    console.log(item.languageName);
    
})