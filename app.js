const addTocart = document.querySelectorAll("button")
const alert_num = document.querySelector(".alert-num")
const alert_circle = document.querySelector(".alert-circle")
const cart = document.querySelector(".icon")
const search = document.querySelector(".search")
const colourCards = document.querySelectorAll('.colour-card')
let count = 0



//Search
search.addEventListener("input", (e) => {
    const typedWords = e.target.value.toLowerCase()

    colourCards.forEach((card) => {
        const colour_name = card.querySelector(".colour-name").textContent.toLocaleLowerCase()
        const colour_class = card.querySelector(".colour-class").textContent.toLocaleLowerCase()

        // Check if the search keyword is in the colour name or class
        if (colour_name.includes(typedWords) || colour_class.includes(typedWords)) {
            card.style.display = ''; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    })

})

addTocart.forEach((button) => {
    button.addEventListener("click", (e) => {
        count++
        sessionStorage.setItem('cartCount', count)
        cart.classList.add("show")
        alert_circle.classList.add("show")
        alert_num.textContent = count
        button.disabled = true //prevent the button from being clicked twice


        const card = e.target.closest('.colour-card')
        // console.log(card);
        const cardData = {
            colorClass: card.querySelector('.colour-frame').classList[1], // Get the color class (e.g., 'red', 'yellow')
            colourClassText: card.querySelector('.colour-class').textContent,
            colourName: card.querySelector('.colour-name').textContent,
            price: card.querySelector('.price').textContent.slice(1), // Get the price without the "$"
        };


        // Store card data in localStorage
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || []; //check if "cartItem" exist else create an array of it
        cartItems.push(cardData);
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));


        // CALCULATIONS OF PRICE AND STORING
        let price_summary = JSON.parse(sessionStorage.getItem("storedPrice")) || []
        price_summary.push(cardData.price)
        sessionStorage.setItem("storedPrice", JSON.stringify(price_summary))


        // Calculate and log the total price
        const totalPrice = price_summary.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
        console.log(`Total Price: $${totalPrice.toFixed(2)}`);


    })
})

// Retrieve the count from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedCount = sessionStorage.getItem('cartCount');
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



