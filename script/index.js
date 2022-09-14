import {navbar,footer} from "../script/comp.js"

document.getElementById("nav").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let hamburger = document.querySelector("#menu");
let link = document.querySelector("#link");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    link.classList.toggle("active");
})