let a = "Dharmesh"
let b = 6
console.log(a + b)

// Chapter 1 - Q2
console.log(typeof (a+b))

// Chapter 1 - Q3
const a1 = {
  name: "dharmesh",
  section: 1,
  isPrincipal: false
}

console.log(a1)
a1.name = "kulu";
a1.isPrincipal =true ; 
a1.section = 5 ; 
console.log(a1)
/// you can chnage as const object value can be chaged but you can not chnage as obj assign in another object with same objetcname
// a1 = {}
/// a1 is const so can not bee obj chnage //error occure then you use a1 assign new object 
// a1 = 45
// a1 = {}

// Chapter 1 - Q4
/// object key pair value is added for question

a1['friend'] = "Shubham"  
a1['name'] = "Lovish"  
console.log(a1)

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  yakka: "work, especially hard work."
}


const dharmeshDict  = {

    ram : 25,
    shyam : "good boy "
}
console.log(dharmeshDict["shyam"])
console.log(dharmeshDict.ram)
console.log(dharmeshDict.shyam)
console.log(dict.appreciate)
console.log(dict['yakka'])