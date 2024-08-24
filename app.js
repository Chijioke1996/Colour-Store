const addTocart = document.querySelectorAll("button")
const alert_num = document.querySelector(".alert-num")
const alert_circle = document.querySelector(".alert-circle")
const cart = document.querySelector(".icon")

let count = 0

addTocart.forEach((button) => {
    button.addEventListener("click", (e) => {
        count++
        cart.classList.add("show")
        alert_circle.classList.add("show")
        alert_num.textContent = count

    })
})

cart.addEventListener("click", () => {
    window.location.href = "/check-out.html"
})