const products = [
    { name: 'Pack Gold', price: '€9', image: 'fotos/golden.jpg', description: 'Masculino, oriental y especiado, con oud, ámbar y cuero. Sofisticado y duradero.', type: 'perfume', quantity: 1 },
    { name: 'Pack Lattafa Khamra', price: '€36', image: 'fotos/KHAMRAH.jpg', description: 'Lattafa Khamra es un perfume masculino oriental y especiado, con una apertura cálida de notas de frutas dulces y especias. Su corazón combina florales suaves con un toque amaderado, mientras que el fondo es profundo y sensual, con notas de ámbar, almizcle y madera. Es una fragancia intensa, elegante y duradera, ideal para ocasiones especiales.', type: 'perfume', quantity: 1 },
    { name: 'Pack Yani', price: '€9', image: 'fotos/pack-yani-3.jpg', description: 'Notas de heliotropo que evocan la suavidad del atardecer, mandarina que añade un toque cítrico chispeante, y pétalos de orquídea que sugieren una belleza rara y preciosa.', type: 'perfume', quantity: 1 },
    { name: 'Princesas de Arabia', price: '€30', image: 'fotos/pack-princesa-arabia.jpg', description: 'El perfume Princesas de Arabia es una fragancia oriental y dulce, con una mezcla de notas florales, afrutadas y especiadas. Sus aromas cálidos y exóticos evocan lujo y misterio, destacando especialmente las notas de vainilla, ámbar y flores blancas.', type: 'perfume', quantity: 1 },
    { name: 'Pack Yara 2', price: '€15', image: 'fotos/pack-yanis.jpg', description: 'Yara de Lattafa es un perfume femenino moderno y encantador, con un carácter dulce y cremoso. Se caracteriza por sus notas afrutadas y florales, con un corazón lácteo y una base cálida de vainilla y almizcle. Es versátil, ideal para climas cálidos y ocasiones casuales, destacándose por su suavidad y longevidad.', type: 'perfume', quantity: 1 },
    { name: 'Pack Yara', price: '€32', image: 'fotos/YARA.jpg', description: 'El perfume tiene una apertura fresca y floral con notas suaves de rosas, lo que le da una fragancia delicada y romántica. A medida que evoluciona, las notas de fondo tienden a ser un poco más cálidas y dulces, con un toque ligero de maderas y quizás un toque de almizcle. La combinación de estas notas ofrece una fragancia equilibrada y elegante.', type: 'perfume', quantity: 1 },
    { name: 'Pack Yani 2', price: '€10,50', image: 'fotos/pack-yani-2.jpg', description: 'Notas de heliotropo que evocan la suavidad del atardecer, mandarina que añade un toque cítrico chispeante, y pétalos de orquídea que sugieren una belleza rara y preciosa.', type: 'perfume', quantity: 1 },
    { name: 'Yara rosa', price: '€20', image: 'fotos/yararosa.jpg', description: 'Yara de Lattafa es un perfume femenino moderno y encantador, con un carácter dulce y cremoso. Se caracteriza por sus notas afrutadas y florales, con un corazón lácteo y una base cálida de vainilla y almizcle. Es versátil, ideal para climas cálidos y ocasiones casuales, destacándose por su suavidad y longevidad.', type: 'perfume', quantity: 1 },
    { name: 'Yara Tous', price: '€20', image: 'fotos/yaranaranja.jpg', description: 'Yara Tous de Lattafa es una fragancia dulce y afrutada, con toques cítricos, cremosidad floral y un fondo almizclado suave. Alegre y femenina.', type: 'perfume', quantity: 1 },
    { name: 'Bolso Panal Abeja', price: '€10', image: 'fotos/panalabeja.png', description: ' ', type: 'bolsos', quantity: 1 },
    { name: 'Perfume Qimmah', price: '€20', image: 'fotos/verdeagua.jpg', description: 'Qimmah de Lattafa es un perfume árabe amaderado y especiado, con oud, ámbar y vainilla. Intenso, elegante y duradero.', type: 'perfume', quantity: 1 },
    { name: 'Yara Moi', price: '€20', image: 'fotos/Yaramoi.jpg', description: 'Un perfume dulce y floral, con notas frutales, vainilla cremosa y un toque almizclado suave. Juvenil, elegante y versátil.', type: 'perfume', quantity: 1 },
    { name: 'Perfume Sakeena', price: '€25', image: 'fotos/Sakeena.jpg', description: 'Dulce y floral, con notas de frutas, flores delicadas, almizcle y vainilla. Sutil, sofisticada y versátil.', type: 'perfume', quantity: 1 },
    { name: 'Ameerat Rosa', price: '€20', image: 'fotos/Ameeratrosa.jpg', description: 'Floral y oriental, con rosa prominente, oud, almizcle y vainilla. Sofisticada, cálida y duradera.', type: 'perfume', quantity: 1 },
    { name: 'Perfume Asad Zanzibar', price: '€23', image: 'fotos/Asadzanzibarhombre.jpg', description: 'Aromático y especiado, con notas de madera, especias y un toque dulce. Elegante, cálido y perfecto para ocasiones especiales.', type: 'perfume', quantity: 1 },
    { name: 'Perfume Ameerat Arab', price: '€20', image: 'fotos/Ameeratarab.jpg', description: 'Un perfume dulce y floral con notas de rosa, jazmín, oud y vainilla. Intenso, elegante y duradero', type: 'perfume', quantity: 1 },
    { name: 'Perfume Yara Assad', price: '€23', image: 'fotos/Yaranegro.jpg', description: 'Dulce y floral, con notas de frutas jugosas, flores suaves y un toque cremoso de vainilla. Elegante, fresca y de larga duración.', type: 'perfume', quantity: 1 },
    { name: 'Andaleeb', price: '€21', image: 'fotos/ANDALEEBASDAAF.jpg', description: 'Un perfume árabe con notas de frutas dulces, flores exóticas, vainilla y almizcle, creando un aroma cálido, seductor y duradero.', type: 'perfume', quantity: 1 },
    { name: 'Rebeca Cherry', price: '€8', image: 'fotos/camisetacereza.jpg', description: 'Rebeca de lana', type: 'ropa', quantity: 1 },
    { name: 'Sudadera Limon', price: '€7', image: 'fotos/limon.jpg', description: '', type: 'ropa', quantity: 1 },
    { name: 'Zapatillas De Casa', price: '€3,50', image: 'fotos/zapatillas.jpg', description: 'Zapatillas para estar en casa calentito', type: 'ropa', quantity: 1 },
    { name: 'Delantal Navideño', price: '€3,50', image: 'fotos/delantal.jpg', description: '', type: 'ropa', quantity: 1 },
    { name: 'Yara Candy', price: '€35', image: 'fotos/yaranueva.jpg', description: 'Yara Candy de Lattafa es una fragancia dulce y afrutada con caramelo, frutas jugosas y vainilla, perfecta para un estilo juvenil y alegre.', type: 'perfume', quantity: 1 },
    { name: 'Rolon Lacoste', price: '€3', image: 'fotos/rolonlacoste.jpg', description: 'Aceite de perfume', type: 'perfume', quantity: 1 },
    { name: 'Yani Sweet', price: '€3', image: 'fotos/yanisweet.jpg', description: '', type: 'perfume', quantity: 1 },
    { name: 'Rolon Yara', price: '€3', image: 'fotos/rolonyara.jpg', description: 'Aceite de yara', type: 'perfume', quantity: 1 },
    { name: 'Desmaquillante natural', price: '€3', image: 'fotos/desmaquillante.jpg', description: '', type: 'perfume', quantity: 1 },
    { name: 'Perfume Tacon', price: '€8', image: 'fotos/tacon.jpg', description: '', type: 'perfume', quantity: 1 },
    { name: 'Ambientador Qimmah', price: '€4', image: 'fotos/ambientadorverde.jpg', description: '', type: 'perfume', quantity: 1 },
    { name: 'Ambientador Barakkat ross', price: '€4', image: 'fotos/ambientadorropjo.jpg', description: '', type: 'perfume', quantity: 1 },
    { name: 'Ambientador Barakkat', price: '€4', image: 'fotos/ambietadorblanco.jpg', description: '', type: 'perfume', quantity: 1 },
    { name: 'Crema dolor', price: '€5', image: 'fotos/CREMADOLOR.jpg', description: 'Crema del dolor natural.', type: 'perfume', quantity: 1 },
    { name: 'Yani sweet', price: '€3', image: 'fotos/yanisweett.jpg', description: '', type: 'perfume', quantity: 1 }, 
    { name: 'Yani prady', price: '€2', image: 'fotos/yanyprady.jpg', description: '', type: 'perfume', quantity: 1 },
    { name: 'riñonera mujer', price: '€5', image: 'fotos/riñonerasmujer.jpg', description: '', type: 'bolsos', quantity: 1 },
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