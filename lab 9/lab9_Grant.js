let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(100,0)
})

let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")
function scrollgallery(pexels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy(pexels,0)
}
btnright.addEventListener("click", function(){
    scrollgallery(600)
})
btnleft.addEventListener("click", function(){
    scrollgallery(-600)
})