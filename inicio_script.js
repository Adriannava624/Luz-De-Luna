const products = [
    { name: 'macarena', price: '€40', image: 'fotos/golden.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus vehicula sem sed vulputate. Etiam pulvinar urna nec mattis porta. Vestibulum convallis lacinia purus, et tempor turpis semper nec. Fusce non nulla turpis. Phasellus interdum suscipit risus vel sagittis. Vestibulum aliquet, elit id sollicitudin venenatis, sem nisl mattis mauris, quis varius elit tortor non magna. Cras eu laoreet libero, ut ultrices arcu. Nulla auctor tortor sem, dignissim vehicula dolor maximus fermentum. Duis convallis metus eu eros porta, in viverra mauris accumsan.', type: 'perfume', quantity: 1 },
    { name: 'putilla', price: '€15', image: 'fotos/KHAMRAH.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus vehicula sem sed vulputate. Etiam pulvinar urna nec mattis porta. Vestibulum convallis lacinia purus, et tempor turpis semper nec. Fusce non nulla turpis. Phasellus interdum suscipit risus vel sagittis. Vestibulum aliquet, elit id sollicitudin venenatis, sem nisl mattis mauris, quis varius elit tortor non magna. Cras eu laoreet libero, ut ultrices arcu. Nulla auctor tortor sem, dignissim vehicula dolor maximus fermentum. Duis convallis metus eu eros porta, in viverra mauris accumsan.', type: 'ropa', quantity: 1 },
    { name: 'colonia oro', price: '€20', image: 'fotos/pack-yani-3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus vehicula sem sed vulputate. Etiam pulvinar urna nec mattis porta. Vestibulum convallis lacinia purus, et tempor turpis semper nec. Fusce non nulla turpis. Phasellus interdum suscipit risus vel sagittis. Vestibulum aliquet, elit id sollicitudin venenatis, sem nisl mattis mauris, quis varius elit tortor non magna. Cras eu laoreet libero, ut ultrices arcu. Nulla auctor tortor sem, dignissim vehicula dolor maximus fermentum. Duis convallis metus eu eros porta, in viverra mauris accumsan.', type: 'bolsos', quantity: 1 },
    { name: 'Princesas de Arabia', price: '€25', image: 'fotos/pack-princesa-arabia.jpg', description: 'El perfume Princesas de Arabia es una fragancia oriental y dulce, con una mezcla de notas florales, afrutadas y especiadas. Sus aromas cálidos y exóticos evocan lujo y misterio, destacando especialmente las notas de vainilla, ámbar y flores blancas.', type: 'perfume', quantity: 1 },
    { name: 'Product 5', price: '€30', image: 'fotos/pack-yanis.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus vehicula sem sed vulputate. Etiam pulvinar urna nec mattis porta. Vestibulum convallis lacinia purus, et tempor turpis semper nec. Fusce non nulla turpis. Phasellus interdum suscipit risus vel sagittis. Vestibulum aliquet, elit id sollicitudin venenatis, sem nisl mattis mauris, quis varius elit tortor non magna. Cras eu laoreet libero, ut ultrices arcu. Nulla auctor tortor sem, dignissim vehicula dolor maximus fermentum. Duis convallis metus eu eros porta, in viverra mauris accumsan.', type: 'ropa', quantity: 1 },
    { name: 'Product 6', price: '€35', image: 'fotos/YARA.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus vehicula sem sed vulputate. Etiam pulvinar urna nec mattis porta. Vestibulum convallis lacinia purus, et tempor turpis semper nec. Fusce non nulla turpis. Phasellus interdum suscipit risus vel sagittis. Vestibulum aliquet, elit id sollicitudin venenatis, sem nisl mattis mauris, quis varius elit tortor non magna. Cras eu laoreet libero, ut ultrices arcu. Nulla auctor tortor sem, dignissim vehicula dolor maximus fermentum. Duis convallis metus eu eros porta, in viverra mauris accumsan.', type: 'bolsos', quantity: 1 },
    { name: 'Product 7', price: '€40', image: 'fotos/pack-yani-2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus vehicula sem sed vulputate. Etiam pulvinar urna nec mattis porta. Vestibulum convallis lacinia purus, et tempor turpis semper nec. Fusce non nulla turpis. Phasellus interdum suscipit risus vel sagittis. Vestibulum aliquet, elit id sollicitudin venenatis, sem nisl mattis mauris, quis varius elit tortor non magna. Cras eu laoreet libero, ut ultrices arcu. Nulla auctor tortor sem, dignissim vehicula dolor maximus fermentum. Duis convallis metus eu eros porta, in viverra mauris accumsan.', type: 'perfume', quantity: 1 },
  ];

  // Function to display products in the grid
  function displayProducts(filteredProducts) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear the existing products

    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <div class="product-footer">
          <p><strong>${product.price}</strong></p>
          <div class="quantity-controls">
            <label for="quantity-${product.name}">Cantidad:</label>
            <select id="quantity-${product.name}" onchange="updateQuantity('${product.name}')">
              <option value="1" ${product.quantity === 1 ? 'selected' : ''}>1</option>
              <option value="2" ${product.quantity === 2 ? 'selected' : ''}>2</option>
              <option value="3" ${product.quantity === 3 ? 'selected' : ''}>3</option>
              <option value="4" ${product.quantity === 4 ? 'selected' : ''}>4</option>
            </select>
          </div>
          <button class="add-to-cart" onclick="addToCart('${product.name}')">Añadir al carrito</button>
        </div>
      `;
      
      container.appendChild(productDiv);
    });
  }

  // Function to update quantity when dropdown changes
  function updateQuantity(productName) {
    const product = products.find(product => product.name === productName);
    const quantityDropdown = document.getElementById(`quantity-${productName}`);
    product.quantity = parseInt(quantityDropdown.value, 10);
  }

  // Function to add the product to the cart
  function addToCart(productName) {
    const product = products.find(product => product.name === productName);
    if (product) {
      // Retrieve the current cart from localStorage or initialize an empty cart
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the product already exists in the cart
      const existingProduct = cart.find(item => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += product.quantity; // Update the quantity if the product already exists in the cart
      } else {
        // If the product is not in the cart, add it with the current quantity
        cart.push({
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          quantity: product.quantity
        });
      }

      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
  updateCartCount(); // Update the cart count
    }
  }

  function updateCartCount() {
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

const cartBadge = document.getElementById('cart-count');
if (totalQuantity > 0) {
  cartBadge.textContent = totalQuantity;
  cartBadge.style.display = 'inline';
} else {
  cartBadge.style.display = 'none';
}
}


  // Function to filter products by type and highlight the selected filter
  function filterProducts(type) {
    // Filter products based on type
    const filteredProducts = type === 'all' ? products : products.filter(product => product.type === type);
    displayProducts(filteredProducts);

    // Highlight the selected button
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(button => {
      const buttonText = button.innerText.trim().toLowerCase();
      if (
        (type === 'all' && buttonText === 'todos los productos') ||
        (type === 'perfume' && buttonText === 'perfumes') ||
        (type === 'ropa' && buttonText === 'ropa') ||
        (type === 'bolsos' && buttonText === 'bolsos')
      ) {
        button.classList.add('selected');
      } else {
        button.classList.remove('selected');
      }
    });
  }

  // Initialize the page with all products
  window.onload = function() {
displayProducts(products);
updateCartCount();
};