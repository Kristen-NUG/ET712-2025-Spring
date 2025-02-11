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
