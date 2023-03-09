

let button = document.querySelector(".js-section__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-section__span");

button.addEventListener("click", () => {
    body.classList.toggle("ciemny");

    if (body.classList.contains("ciemny")) {
        themeName.innerText = "biały";
    } else {
        themeName.innerText = "ciemny";
    }
})