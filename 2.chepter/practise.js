
// Problem No 1


// let age = prompt("What is your age?")
let age = 25  ; 
// age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}


// Problem No 2

// let c = prompt("What is your age?")
let c  = 14 ; 
let d = c.valueOf.toString ;
switch (d) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}

// Problem No 3/*
// let num = prompt("What is your age?")
let  num  = 6 ;  
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}


// Problem No 5

// turnary contion its also be used as js 
let b = 19
let a = b > 18 ? "You can drive" : "You cannot drive"
console.log(a)