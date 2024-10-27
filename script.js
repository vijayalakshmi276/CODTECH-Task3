let cart = [];
let totalPrice = 0;

// Function to add a course to the cart
function addToCart(courseName, coursePrice) {
    cart.push({ name: courseName, price: coursePrice });
    totalPrice += coursePrice;
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');

    // Clear the cart items list
    cartItems.innerHTML = '';

    // Display each item in the cart
    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
    });

    // Update total price
    totalDisplay.textContent = totalPrice;
}