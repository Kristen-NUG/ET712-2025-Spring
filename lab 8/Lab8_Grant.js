console.log(`Kristen Grant`)

let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
    if(e.target.textContent === "PRESS ME"){
        e.target.textContent = "Button was pressed!"
    }
    else{
        e.target.textContent = "PRESS ME"
    }
    e.target.classList.toggle("btnactive")
})
let fruitlist = document.querySelector("#fruitlist")
fruitlist.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase()==='li'){
        event.target.remove()
    }
    else{
        console.log(event.target)
    }
})

let linkqcc = document.querySelector(".linkqcc")
linkqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert(`QCC website is off`)
})

let modalwindow = document.querySelector(".modalwindow")
let linkreadmore = document.querySelector(".linkreadmore")
let closex = document.querySelector(".closex")

linkreadmore.addEventListener("click", function(){
    modalwindow.style.display = "block"
})
closex.addEventListener("click", function(){
    modalwindow.style.display = "none"
})
let counter = 0;
let circle = document.document.querySelector('circle');
let counterDisplay = document.document.querySelector('counter');
let resetButton = document.document.querySelector('resetButton');
circle.addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter;
});
resetButton.addEventListener('click', function() {
    counter = 0;
    counterDisplay.textContent = counter;
})