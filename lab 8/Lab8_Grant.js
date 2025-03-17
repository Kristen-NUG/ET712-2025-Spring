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