console.log(`Kristen Grant`)

const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector(".errormsg")

window.addEventListener("load", function(){
    btnsubmit.disabled = true
})
myform.addEventListener("click", function(event){
    event.preventDefault()
    let username = document.querySelector("#username")
    let usernamevalue = username.value

    let password = document.querySelector("#password")
    let passwordvalue = password.value

    usernamevalue = usernamevalue.trim()

    if(usernamevalue===""){
        alert(`Please enter a username: `)
        return;
    }

    greetuser.innerHTML = usernamevalue
    greeting.style.display = `block`

    username.value = ""
})


