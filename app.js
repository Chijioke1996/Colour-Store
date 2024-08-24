const addTocart = document.querySelectorAll("button")
const alert_num = document.querySelector(".alert-num")
const alert_circle = document.querySelector(".alert-circle")
const cart = document.querySelector(".icon")

let count = 0

addTocart.forEach((button) => {
    button.addEventListener("click", (e) => {
        count++
        localStorage.setItem('cartCount', count)
        cart.classList.add("show")
        alert_circle.classList.add("show")
        alert_num.textContent = count
        button.disabled = true //prevent the button from being clicked twice


    })
})

// Retrieve the count from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedCount = localStorage.getItem('cartCount');
    if (savedCount) {
        count = parseInt(savedCount);
        cart.classList.add("show");
        alert_circle.classList.add("show");
        alert_num.textContent = count;
    }
});

cart.addEventListener("click", () => {
    window.location.href = "/check-out.html"
})