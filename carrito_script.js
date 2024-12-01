function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear the existing cart items

    // If the cart is empty
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }

    let total = 0;

    // Loop through the cart items
    cart.forEach((item, index) => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');

      // Calculate total price for each item
      const itemTotal = item.quantity * parseFloat(item.price.replace('€', '')); // Remove '$' for calculation

      cartItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="details">
          <h3>${item.name}</h3>
          
          <p>Precio: ${item.price}</p>
          <p>Cantidad: ${item.quantity}</p>
        </div>
        <div class="total-price">
          €${itemTotal.toFixed(2)}
        </div>
        <div class="actions">
          <button class="delete-btn" onclick="deleteProduct(${index})">Eliminar</button>
        </div>
      `;

      cartContainer.appendChild(cartItemDiv);

      // Add item total to overall total
      total += itemTotal;
    });

    // Display total price of all items in the cart
    const cartFooter = document.createElement('div');
    cartFooter.classList.add('cart-footer');
    cartFooter.innerHTML = `Total: €${total.toFixed(2)}`;
    cartContainer.appendChild(cartFooter);
  }

  // Function to handle product deletion from the cart
  function deleteProduct(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the product at the given index
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    displayCart(); // Re-render the cart
  }

  // Function to clear the cart
  function clearCart() {
    localStorage.removeItem('cart');
    displayCart(); // Re-render the cart after clearing
  }

  // Initialize the cart page
  window.onload = function() {
    displayCart();
    
    // Add event listener for "Clear Cart" button
    document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
  };