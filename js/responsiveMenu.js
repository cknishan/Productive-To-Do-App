"use strict";

const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")

burger.addEventListener('click', ()=> {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
        menu.classList.remove("z-5")
        menu.classList.remove("absolute")
    } else {
        menu.classList.add("hidden")
        menu.classList.add("z-5")
        menu.classList.add("absolute")
    }
    console.log("click")
})