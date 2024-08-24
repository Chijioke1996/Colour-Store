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


        const card = e.target.closest('.colour-card');
        const cardData = {
            colorClass: card.querySelector('.colour-frame').classList[1], // Get the color class (e.g., 'red', 'yellow')
            colourClassText: card.querySelector('.colour-class').textContent,
            colourName: card.querySelector('.colour-name').textContent,
            price: card.querySelector('.price').textContent,
        };

        // console.log(card);

         // Store card data in localStorage
         let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; //check if "cartItem" exist else create an array of it
         cartItems.push(cardData);
         localStorage.setItem('cartItems', JSON.stringify(cartItems));
        



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



