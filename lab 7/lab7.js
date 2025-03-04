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
console.log(`-------- Example 3: The Click Event --------`)
let btn = document.querySelector(".btnclick")
btn.addEventListener("click", function(){
    alert(`BTN WAS CLICKED!`)
})