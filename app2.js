//CHECK OUT PAGE JAVASCRIPT

const parent_container = document.querySelector('.parent-container');

document.addEventListener("DOMContentLoaded", () => {

    // Retrieve the cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems) {
        cartItems.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('colour-card');

            card.innerHTML = `
            <div class="colour-frame ${item.colorClass}"></div>
            <p class="colour-class">${item.colourClassText}</p>
            <p class="colour-name">${item.colourName}</p>
            <p class="price">${item.price}</p>
        `;

            parent_container.appendChild(card);
        });
    }
});



