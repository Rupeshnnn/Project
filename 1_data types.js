


//Type of Data Type are: var,let,const.var can declare same variable many time but let can only ones time.
// for printing last element we use length  synatx: container_name.length_keyword
//console.log(firstName[firstName.length-1])

/*
To reduce the empty space from string
Her firstName give new string not a old string let is immutable object

let firstName="  RupeshBhujel  "
console.log(firstName.length)
console.log(firstName)
let newString = firstName.trim()
console.log(newString.length)
*/

/* Slicing 
in Javascript slice_keyword(first index,last index)
let firstName = "Rupesh Bhujel"
console.log(firstName.slice(0,9,2))
*/

/* 
type conversion
let num1 = 5;

//To convert num into string: + "" or String
num1 = num1 + ""
console.log(typeof num1)

//To convert string to number: add + or Number
let String1="5"
let String2 ="6"

let sum = +String1 + +String2
console.log(sum)




/* 
Adding concatinate and string
let num=5
let String1="Hello"
let about = num + String1
console.log(about)

 */

/* 
Template String
let String="Rupesh Bhujel"
let age =25
console.log(`My name is ${String} and my age is ${age}`)

*/



/* Comparision operator 
 == and ===
 == check only value not a data type 
 === check both data type and value
 */

 /* 
 != vs !==
 != compare value in boolen form but only the number not data type
 !== check data type and value.
 let number1=5
let number2="5"
console.log(number1 !== number2)
 */

/* 
falsy value:
null
undefined:value initialized  but not decleared
false
""
0

truth value:
all value excluding above
*/

/* 
ternary operator
let age=18
if (age>18){
    let drink="coffe"
    console.log(drink)
}
else{
    let drink ="Tea"
    console.log(drink)
}
*/

let value1 = 19
let value2 = prompt("Enter the value:")
if (value1>value2){
    console.log("less")
}else if(value1==value2){
    console.log("equal")
}else{
    console.log("High")
}