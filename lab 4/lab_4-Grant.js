console.log(`Kristen Grant`)
console.log(`---------- Example 1: Functions ----------`)
function msg(){
    console.log(`Hello World!`)
}
console.log(`---------- Example 2: Function to Print 3,2,1 ----------`)
function printcount() {
    for(let n=3; n>0; n--){
        console.log(n)
    }
}
console.log(`---------- Example 3: Function with Parameters ----------`)
function greeting(passname) {
    passname = passname.toUpperCase()
    console.log(`Welcome to Function, ${passname}!`)
}
function sum(x,y) {
    console.log(`${x} + ${y} = ${x+y}`)
}

console.log(`---------- Example 4: Snake Eyes ----------`)
function snake_eyes(x,y) {
    if(x===1 && y===1){
        console.log("SNAKE EYES!")
    }
    else{
        console.log(`Not a snake eye!`)
    }
}
snake_eyes(3,5)
snake_eyes(1,1)

console.log(`---------- Example 5: Function that Returns Value ----------`)
function doublenumber(n){
    n *=2
    return n
}
let number = 5
let dnum= doublenumber(number)
console.log(`The double number of ${number} is ${dnum}.`)

console.log(`---------- Example 6: Function that Returns Value ----------`)
function checktemp(temperature){
    if(temperature>75){
        return true
    }
    else{
        return false
    }
}
let t = 100
let temp_result = checktemp(t)
console.log(`Is this temperature greater than 75? ${temp_result}`)