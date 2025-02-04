console.log("Kristen Grant")
console.log("---------- Example 1: for Loops ----------")
for(let n=0; n<=4; n++){
    console.log(`counting = ${n}`)
}

console.log("---------- Example 2: for Loops with Conditional Statement ----------")
let initialValue = parseInt(prompt("Enter a number: "))
for(initialValue; initialValue <=20; initialValue++){
    if(initialValue%2==0){
    console.log(initialValue)}
}

console.log("---------- Example 3: for Loops as Decrement Counter ----------")
for(let n = 9; n>0; n-= 3){
    console.log(n)
}

console.log("---------- Example 4: for Loops in an Array(List) ----------")
let animals = ["fish","turtle","dog"]
for(let index=0; index<animals.length; index++){
    console.log(animals[index])
}

let numbers = [5, -3, 10, -9, 2]
let counternegative = 0
for(let index = 0; index<numbers.length; index++){
    if(numbers[index]<0){
        counternegative++
    }
}
console.log(`There is/are ${counternegative} negative number/s in list 'numbers'.`)

console.log("---------- Example 5: for Loops in a String ----------")
let username = "Peter Pan, neverland"
let counter_e = 0;
for(let index = 0; index<username.length; index++){
    if(username[index]==='e'){
        counter_e++
    }
}
console.log(`There is are ${counter_e} letter e in 'username'.`)

console.log("---------- EXERCISE FOR LOOP ----------")
let num = [-3,10,0,8,-9,5,-2,8,6,-1]
let neg = 0
let pos = 0
for(let index = 0; index<num.length; index++){
    if(num[index]<0){
        neg= neg+num[index]}
    else if(num[index]>0){
        pos= pos+num[index]
    }
}
console.log(`Sum of all the positive numbers is: ${pos}.`)
console.log(`Sum of all the negative numbers is: ${neg}.`)