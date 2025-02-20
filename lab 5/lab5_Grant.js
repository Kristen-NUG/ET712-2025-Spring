console.log(`Kristen Grant`)
console.log(`Lab 5`)
console.log(`---------- Example 1: Function in a Variable ----------`)
const sum = function(num1, num2){
    return num1 + num2
}
console.log(sum(5, 8))

console.log(`---------- Example 2: Function in a Variable ----------`)
let squarenumber = function(n){
    return Math.pow(n,2)
}
console.log(squarenumber(5))

console.log(`---------- Example 3: Arrow Function ----------`)
let greet = function(username){
    console.log(`Welcome to JS ${username}`)
}
greet(`Kristen`)

console.log(`---------- Example 4: Function with Default Parameter ----------`)
function cubenumber(n=1){
    return Math.pow(n,3)
}
console.log(`2^3 = ${cubenumber(2)}`)
console.log(`empty^3 = ${cubenumber()}`)

console.log(`---------- Example 5: Spread Syntax ----------`)
nums = [-2, 5, 9, 3, -8]
let maxnum = Math.max(...nums)
console.log(maxnum)