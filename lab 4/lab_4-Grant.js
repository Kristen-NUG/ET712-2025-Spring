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

console.log(`---------- Example 7: Built-in Functions ----------`)
//Math object
let num_pi = Math.PI
console.log(`JS PI value = ${num_pi}.`)
//round() rounds to the nearest integer
console.log(`Rounded Up PI = ${Math.round(num_pi)}.`)
//ceil() rounds up to next number
console.log(`Ceil Method applied to PI = ${Math.ceil(num_pi)}.`)
//pow() does exponents
console.log(`2^3 = ${Math.pow(2,3)}.`)
//sqrt() does the square root of a number
console.log(`Square Root of 20 = ${Math.sqrt(20)}.`)
//random() randomizes a number between 0 and 1
console.log(`Random Number = ${Math.random()}.`)

let n = 1 + Math.round(Math.random()*8)
console.log(`A number between 1 and 9 is ${n}.`)

console.log(`---------- Example 8: Random Number ----------`)
function randnum(){
    let p = -5 + Math.round(Math.random()*10)
    return p;
}

console.log(`---------- Example 9: Random Number in a List (Array) ----------`)
let colors = ["red", "green", "blue", "magneta", "gray"]
function randclr(){
    let list_size = colors.length
    let last_index = list_size - 1
    let random_index = Math.round(Math.random()*last_index)
    return colors[random_index]
}
console.log(`Color picked = ${randclr()}.`)
