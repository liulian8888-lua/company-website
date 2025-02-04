let cart = [];
let total = 0;

function addToCart(productName, productPrice, quantity) {
    quantity = parseInt(quantity);
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        // Update quantity and total price for the existing product
        existingProduct.quantity += quantity;
        existingProduct.totalPrice += productPrice * quantity;
    } else {
        // Add new product to cart
        cart.push({ name: productName, price: productPrice, quantity: quantity, totalPrice: productPrice * quantity });
    }
    // Update total
    total += productPrice * quantity;
    // Update cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Clear current cart items
    cartItems.innerHTML = '';
    
    // Add each item in the cart to the display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${item.totalPrice.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    
    // Update total display
    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    alert(`Total amount: $${total.toFixed(2)}`);
    // Clear cart and total
    cart = [];
    total = 0;
    // Update cart display
    updateCartDisplay();
}