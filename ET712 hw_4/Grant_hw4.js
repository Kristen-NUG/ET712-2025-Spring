document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();
  
    let isValid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
  
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMessage").textContent = "";
  
    if (name === ""){
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
      document.getElementById("emailError").textContent = "Invalid email format.";
      isValid = false;
    }
  
    const passwordPattern = /^(?=.*[#\$%]).{5,}$/;
    if (!passwordPattern.test(password)){
      document.getElementById("passwordError").textContent = "Password must be at least 5 characters long and contain #, $, or %.";
      isValid = false;
    }
  
    if (isValid){
      document.getElementById("successMessage").textContent = "Form submitted successfully!";
    }
})

let index = 0;
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;
const cardsPerView = 3;
const gallery = document.querySelector(".gallery");
function updateGallery(){
  gallery.style.transform = `translateX(${-index * 100}px)`;
}
document.getElementById("next").addEventListener("click", function(){
  if (index < totalCards - cardsPerView) {
    index++;
  } else {
    index = 0;
  }
  updateGallery();
});
document.getElementById("prev").addEventListener("click", function(){
  if (index > 0) {
    index--;
  } else {
    index = totalCards - cardsPerView;
  }
  updateGallery();
})