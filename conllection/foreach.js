let set = new Set(["a","b","c"]);
set.forEach(log,set)

function log( value1,value2,setObj) {
    // console.log(setObj)
    // console.log(this === set);
    console.log(`[${value1}] = ${value2}`)
}