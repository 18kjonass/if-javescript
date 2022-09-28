// program 1
let user_input = Number(prompt("number to cheak"))
if (user_input % 2 == 0) {
    console.log("this number is even")
}else {
    console.log("this number is odd")
}
// program 2
let user_input2 = Number(prompt("number 1"))
let user_input3 = Number(prompt("number 2"))
if (user_input2 > user_input3) {
    console.log("Number 1 is bigger than Number 2")
}else if (user_input3 > user_input2) {
    console.log("Number 2 is bigger than Number 1")
}else
    console.log("Numbers are the same")
// program 3
let user_input4 = Number(prompt("number 1"))
let user_input5 = Number(prompt("number 2"))
let user_input6 = Number(prompt("number 3"))
if (user_input4 > user_input5 && user_input4 > user_input6) {
    console.log("Number 1 is the biggest")
}else if (user_input5 > user_input4 && user_input5 > user_input6) {
    console.log("Number 2 is the biggest")
}else if (user_input6 > user_input5 && user_input6 > user_input4) {
    console.log("Number 3 is the biggest")
} else
console.log("all numbers are the same")
//program 4
let user_input7 = Number(prompt("side 1"))
let user_input8 = Number(prompt("side 2"))
let user_input9 = Number(prompt("side 3"))
if (user_input7 == user_input8 && user_input7 == user_input9 && user_input8 == user_input9) {
    console.log("triangle is Equilatral")
}else if (user_input7 != user_input8 && user_input7 != user_input9 && user_input8 != user_input9) {
    console.log("triangle is Isosceles")
}eles
console.log("triangle is Scalene")
//program 5
let user_input10 = Number(prompt("number 1"))
let user_input11 = Number(prompt("number 2"))
let user_input12 = prompt("operation")
if (user_input12 =="add"){
  console.log(user_input10+user_input11)
}
if(user_input12 =="subtract"){
    console.log(user_input10-user_input11)
} 
if(user_input12 =="multiply"){
    console.log(user_input10*user_input11)
} 
if(user_input12 =="divide"){
    console.log(user_input10/user_input11)
} 
if(user_input12 =="modulus"){
    console.log(user_input10%user_input11)
} 