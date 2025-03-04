console.log(`Kristen Grant`)
console.log(`-------- Example 1: Selecting Elements --------`)
let desc = document.querySelector(".description");
console.log(desc)
let titlenode = document.querySelector("#title");
console.log(titlenode)
let par = document.querySelectorAll("p");
console.log(par)
let methods = document.querySelectorAll(".method");
console.log(methods)
console.log(`-------- Example 2: Loop Through Each Element in a Node --------`)
for(let n = 0; n<methods.length; n++){
    console.log(methods[n]);
}