document.addEventListener("DOMContentLoaded", start);
let burgerKnap = document.querySelector("#burgerknap");
let menu = document.querySelector("nav");

async function start() {
    console.log("start");
    burgerKnap.addEventListener("click", toggleMenu);

}


//klapper burgermenu sammen og ud igen
function toggleMenu() {
    console.log("toggleMenu");

    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
        burgerKnap.textContent = "=";
    } else {
        burgerKnap.textContent = "X";
    }
};
