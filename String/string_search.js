// String Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log("indexof  : " ,index);


let index2 = text.lastIndexOf("locate");
console.log("lastIndexOf  : " ,indexx2);


//Both indexOf(), and lastIndexOf() return -1 if the text is not found:

let index3 = text.indexOf("locate", 15);











// start searching in 15 posititon 
console.log(index3)

let index4 = text.search("locate");

console.log(index4)

///The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

let searchmatch = "The rain in SPAIN stays mainly in the plain";
let data = searchmatch.match("ain");
let data2 = searchmatch.match(/ain/);
let data4 = searchmatch.includes("rain");
const iterator = searchmatch.matchAll("rain");
console.log(data)
console.log(data2)
console.log(data4)
console.log(iterator)



//   startwith and starwendb  it value will be return as true or false so be remenebr 
 let txt2 = "Hello world, welcome to the universe";
 let my = txt2.startsWith("Hello");
 let endmy  =  txt2.endsWith("universe");
 text.endsWith("world", 11);


 console.log(my)
 console.log(endmy)