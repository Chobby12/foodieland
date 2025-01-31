const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
navLink.forEach(link => link.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const favouriteBtn = document.querySelectorAll(".favourite");

const arr = [`<img src="pictures/Heart.svg" class="set" alt="">`, `<img src="pictures/Vector.png" alt="">`]
favouriteBtn.forEach(btn => btn.addEventListener("click", ()=>{
    if(btn.innerHTML==arr[0]) btn.innerHTML = arr[1]
    else btn.innerHTML = arr[0]
}))