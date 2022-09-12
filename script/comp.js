let hamburger = document.querySelector("#menu");
let link = document.querySelector("#link");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    link.classList.toggle("active");
})