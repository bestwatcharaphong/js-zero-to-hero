let set = new Set();
set.add(1);
set.add(2);
set.add({id : 1});
set.add(true);
set.add(true);
set.add(null);
set.add(null);
set.add(null);
set.add(undefined);
set.add(undefined);
console.log(set.size)
console.log(set)
console.log("=======================")
let set2 = new Set();
set2.add(1).add(2).add(3)
console.log(set2)
console.log("========================")
let set3 = new Set( ["a","b","b"] );
console.log("set3",set3)
console.log("=====================")
let set4 = new Set( 'def')
console.log("set4",set4)
console.log("======================")
let set5 = new Set(['a','b','c']);
let set6 = new Set(set5);
console.log("set6",set6)
console.log("=========================")
console.log("delete set")
let set7 = new Set(["a","b","c"]);
console.log("set7",set7)
console.log("set7 delete",set7.delete("a"));
console.log("set7",set7)
set7.clear()
console.log("set7 clear",set7.size)