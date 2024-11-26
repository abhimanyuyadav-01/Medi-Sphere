const products = [
    { id: 1, name: 'Paracetamol', price: 150 },
    { id: 2, name: 'Ibuprofen', price: 100 },
    { id: 3, name: 'Amoxicillin', price: 120 },
    { id: 4, name: 'Cough Syrup', price: 180 },
    { id: 5, name: 'Antiseptic Cream', price: 90 },
    { id: 6, name: 'Vitamin C Tablets', price: 300 },
    { id: 7, name: 'Antibiotic Ointment', price: 60 },
    { id: 8, name: 'Pain Relief Spray', price: 90 },
    { id: 9, name: 'Blood Pressure Medicine', price: 100 },
    { id: 10, name: 'Diabetes Tablets', price: 120 },
  ];
  
  let cart = [];
  
  // Load Products
  const productGrid = document.getElementById('productGrid');
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <span>$${product.price}</span>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
  });
  
  // Add to Cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCart();
  }
  
  // Remove from Cart
  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    updateCart();
  }
  
  // Update Cart
  function updateCart() {
    const cartTable = document.querySelector('#cartTable tbody');
    const cartTotal = document.getElementById('cartTotal');
    cartTable.innerHTML = '';
    let total = 0;
  
    cart.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.quantity * item.price}</td>
        <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
      `;
      cartTable.appendChild(row);
      total += item.quantity * item.price;
    });
  
    cartTotal.textContent = total.toFixed(2);
  }
  
  // Show Checkout Section
  function showCheckout() {
    document.getElementById('cartSection').style.display = 'none';
    document.getElementById('checkoutSection').style.display = 'block';
  }
  
  // Toggle Payment Details
  function togglePaymentDetails() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    document.getElementById('cardDetails').classList.remove('active');
    document.getElementById('upiDetails').classList.remove('active');
  
    if (paymentMethod === 'card') {
      document.getElementById('cardDetails').classList.add('active');
    } else if (paymentMethod === 'upi') {
      document.getElementById('upiDetails').classList.add('active');
    }
  }
  
  // Checkout Form Submit
  document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    cart = [];
    updateCart();
    location.reload();
  });
  