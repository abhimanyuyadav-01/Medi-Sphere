// script.js

// Sample medicines data
const medicines = [
    { name: 'Paracetamol', image: 'paracetamol.png', price: 30, description: 'Pain relief and fever reducer', usage: 'Take 1 tablet every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.' },
    { name: 'Aspirin', image: 'aspirin.png', price: 25, description: 'Used to reduce fever and relieve mild to moderate pain.', usage: 'Take 1-2 tablets every 4-6 hours. Do not exceed 4g in a day.' },
    { name: 'Amoxicillin', image: 'amoxicillin.png', price: 55, description: 'Antibiotic for bacterial infections.', usage: 'Take 500mg every 8 hours for 7-10 days, as prescribed by a doctor.' },
    { name: 'Ibuprofen', image: 'ibuprofen.png', price: 40, description: 'Pain reliever and anti-inflammatory drug.', usage: 'Take 400-600mg every 6 hours as needed for pain. Do not exceed 2400mg/day.' },
    { name: 'Cough Syrup', image: 'cough_syrup.png', price: 80, description: 'Provides relief from cough and throat irritation.', usage: 'Take 2 teaspoons every 4-6 hours. Do not exceed 8 teaspoons in 24 hours.' },
    { name: 'Cetirizine', image: 'cetirizine.png', price: 20, description: 'Antihistamine used for allergies.', usage: 'Take 1 tablet once daily. Do not exceed the recommended dosage.' },
    { name: 'Vitamin C', image: 'vitamin_c.png', price: 50, description: 'Boosts immunity and fights infections.', usage: 'Take 1 tablet daily after a meal.' },
    { name: 'Antacid', image: 'antacid.png', price: 15, description: 'Neutralizes stomach acid for relief from heartburn.', usage: 'Take 1-2 tablets after meals or as needed for heartburn relief.' },
    { name: 'Insulin', image: 'insulin.png', price: 1500, description: 'Used to manage blood sugar levels in diabetes.', usage: 'Administer subcutaneously as directed by your healthcare provider.' },
    { name: 'Antibiotic Cream', image: 'antibiotic_cream.png', price: 45, description: 'Treats skin infections and promotes healing.', usage: 'Apply a thin layer on the affected area 2-3 times a day.' },
    { name: 'Eye Drops', image: 'eye_drops.png', price: 35, description: 'Relieves eye irritation and dryness.', usage: 'Instill 1-2 drops in the affected eye(s) 3-4 times a day.' },
    { name: 'Cough Lozenges', image: 'lozenges.png', price: 10, description: 'Provides relief from sore throat and cough.', usage: 'Dissolve 1 lozenge in the mouth every 2-3 hours.' },
    { name: 'Multivitamin', image: 'multivitamin.png', price: 150, description: 'Daily multivitamin for overall health.', usage: 'Take 1 tablet daily after a meal.' },
    { name: 'Antifungal Cream', image: 'antifungal_cream.png', price: 60, description: 'Used to treat fungal infections.', usage: 'Apply to the affected area twice daily for 2-4 weeks.' },
    { name: 'Calcium Tablets', image: 'calcium_tablets.png', price: 120, description: 'Helps strengthen bones and teeth.', usage: 'Take 1 tablet daily with a meal.' },
    { name: 'Cold and Flu Tablets', image: 'flu_tablets.png', price: 40, description: 'Relieves symptoms of cold and flu.', usage: 'Take 1-2 tablets every 6 hours as needed. Do not exceed 8 tablets in 24 hours.' },
    { name: 'Pain Balm', image: 'pain_balm.png', price: 35, description: 'Relieves joint and muscle pain.', usage: 'Massage a small amount on the affected area 2-3 times daily.' },
    { name: 'Antibiotic Syrup', image: 'antibiotic_syrup.png', price: 90, description: 'Used for treating bacterial infections in children.', usage: 'Give as per the doctor’s prescription, usually 5ml 3 times a day.' },
    { name: 'Digestive Enzyme', image: 'digestive_enzyme.png', price: 70, description: 'Improves digestion and relieves bloating.', usage: 'Take 1 tablet after meals, 3 times a day.' },
    { name: 'Nasal Spray', image: 'nasal_spray.png', price: 60, description: 'Provides relief from nasal congestion.', usage: 'Spray 1-2 times in each nostril as needed.' }
];

// Cart and total price initialization
let cart = [];
let totalPrice = 0;

// Load medicines dynamically
const medicineContainer = document.getElementById('medicineContainer');

function loadMedicines() {
    medicines.forEach((medicine, index) => {
        const medicineDiv = document.createElement('div');
        medicineDiv.classList.add('medicine');
        
        medicineDiv.innerHTML = `
            <img src="${medicine.image}" alt="${medicine.name}">
            <h3>${medicine.name}</h3>
            <p>${medicine.description}</p>
            <p class="price">Price: ₹${medicine.price}</p>
            <p><strong>How to Use:</strong> ${medicine.usage}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        
        medicineContainer.appendChild(medicineDiv);
    });
}

// Add to cart functionality
function addToCart(index) {
    const selectedMedicine = medicines[index];
    cart.push(selectedMedicine);
    updateCartSummary();
}

// Update cart summary and total price
function updateCartSummary() {
    const cartCount = document.getElementById('cart-count');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkoutTotal = document.getElementById('checkout-total');
    
    totalPrice = cart.reduce((total, medicine) => total + medicine.price, 0);
    cartCount.textContent = cart.length;
    totalPriceDisplay.textContent = totalPrice;
    checkoutTotal.textContent = totalPrice;
}

// Search functionality
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', function() {
    const filter = searchBar.value.toLowerCase();
    const medicinesList = document.querySelectorAll('.medicine');

    medicinesList.forEach(medicine => {
        const medicineName = medicine.querySelector('h3').textContent.toLowerCase();
        if (medicineName.includes(filter)) {
            medicine.style.display = '';
        } else {
            medicine.style.display = 'none';
        }
    });
});

// Initialize
loadMedicines();
