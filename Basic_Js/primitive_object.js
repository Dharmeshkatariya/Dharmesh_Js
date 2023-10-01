// nn bb ss u - Primitives in Js
// Primitive data type in js 
///  datatype in js 
// nn bb ss u  number null string symbol bool bigint  undefined 
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")


console.log(d)
let e = "dk"
let f = Symbol("I am a nice symbol for cretive componet ")

console.log(f)
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "Dharmesh": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Shubh"])
console.log(item["Rohan"])
console.log(item["Rohan"])
console.log(item["Lovish"])
console.log(item["Dharmesh"])