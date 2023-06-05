let a = ["red","green","blue","yellow"]

function search(value, index, array ) {
    // console.log(array,"array")
    return value == "blue";
}

let result = a.find(search);
// console.log(result)

console.log("=============================")
let result2 = a.find( function (value, index,  array) {
    console.log(array,"array function2")
    console.log(this === a);
    return this[index] == "blue"
},a)

console.log(result)