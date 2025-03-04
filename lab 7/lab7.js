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
console.log(`-------- Example 4: The Change Event --------`)
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
btnmsg.addEventListener("click", function(){
    msg.innerHTML = "Good afternoon <b> Kristen Grant</b>"
})
console.log(`-------- Example 5: Changing Shapes Mini-App --------`)
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")
btncircle.addEventListener("click", function(){
    shape.className = ("circle")
})
btnsquare.addEventListener("click", function(){
    shape.className = ("square")
})
btnrectangle.addEventListener("click", function(){
    shape.className = ("rectangle")
})