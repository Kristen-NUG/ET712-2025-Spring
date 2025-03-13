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

let event6 = document.querySelector(".event6")
event6.onmouseout = function(){
    alert("MOUSE OUT - Example 6")
}
function openalert(){
    alert("CLICK EVENT - Example 7")
}
let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout=function(){
    let randred= Math.floor(Math.random()*255)
    let randgreen= Math.floor(Math.random()*255)
    let randblue= Math.floor(Math.random()*255)
    divexample8.style.backgroundColor=`rgb(${randred}, ${randgreen}, ${randblue})`
}

let inputex9 = document.querySelector(".inputex9")
let exparagraph9 = document.querySelector(".ex9paragraph")
inputex9.onkeydown = function(event){
    exparagraph9.innerHTML = `Key ${event.key} was pressed.`
    divs3.style.width=`300px`
}

console.log(`---------- Exercise ----------`)
let ps1 = document.querySelector(".ps1")
ps1.onmouseout = function(event){
    ps1.innerHTML = `Kristen Grant`
}
let ps2 = document.querySelector(".ps2")
ps2.addEventListener('click',function(){
    ps2.style.fontSize= `25px`;
    ps2.style.color = `olive`;
})
let divs2 = document.querySelector(".divs2")
divs2.addEventListener('click', function(){
    divs2.style.backgroundColor= `indigo`
})
let divs3 = document.querySelector(".divs3")
let inputex =document.querySelector(".inputex")
