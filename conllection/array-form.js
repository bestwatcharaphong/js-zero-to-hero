let a = [1,2,3];
let array1 = Array.from(a)
console.log(array1)
console.log("===================")

let str = "456"
let array2 = Array.from(str)
console.log(array2)
console.log("====================")

let set = new Set([7,8,9]);
let array3 = Array.from(set);
console.log(array3);
console.log("====================")

let obj = {
    length : 4,
    1 : "foo",
    2: "bar"
};

let array = Array.from(obj)
console.log(obj.length)
console.log(array)
console.log("=======================")

let arrayLength = Array.from({ length : 4 })
console.log(arrayLength)
console.log("========================")
let b = Array(4);
console.log(b)
let c = Array.apply( null , { length : 4 });
console.log(c)
console.log("========================")

let obj1 = {
    length : 4,
    1 : "foo",
    2 : "bar", 
};

let toUpper = function (value , index) {
    console.log(value,index,"data")
    if(typeof value == "string") {
        return this[index]
    } else {
        return " index_" + index;
    }
}

let arrayToUpper = Array.from( obj1,toUpper)
console.log(arrayToUpper)