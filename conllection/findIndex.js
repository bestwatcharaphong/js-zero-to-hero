let a = ["red","green","blue","yellow"];
let search = function (value , index,array) {
    return value == "blue"
};
let result = a.findIndex(search);
console.log(result)
console.log("=====================")
let result2 = a.findIndex(function(value, index, array) {
    return this[index] == "blue"
},a)
console.log(result2)