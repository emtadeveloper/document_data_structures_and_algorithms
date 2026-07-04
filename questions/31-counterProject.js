
//  بیا و یک شمارنده درست کن که 3 تا دکمه افزایش کاهش و ریست داشته باشه

const incrementBtn = document.querySelector(".increment");
const counterValue = document.querySelector(".counter span");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");

let count = 0;

function increment() {
    count++;
    counterValue.textContent = count;
}
incrementBtn.addEventListener("click", increment);

//

function decrement() {
    count--;
    counterValue.textContent = count;
}
decrementBtn.addEventListener("click", decrement);

//

function reset() {
    count = 0;
    counterValue.textContent = count;
}
resetBtn.addEventListener("click", reset);

//  راه حل دوم

const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter  span");
let count = 0;
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const classList = btn.classList;
        if (classList.contains("increment")) count++;
        else if (classList.contains("decrement")) count--;
        else count = 0;
        if (count > 0) counterValue.style.color = "green";
        else counterValue.style.color = "red";
        counterValue.textContent = count;
    });
});
