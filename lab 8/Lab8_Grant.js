console.log(`Kristen Grant`)

let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(){
    if(btnpressme.textContent = "PRESS ME"){
        btnpressme.textContent = "Button was pressed!"
    }
    else{
        btnpressme.textContent = "PRESS ME"
    }
})