// Initialize weight and height values
let weight = 70; // in kilograms
let height = 170; // in centimeters

// Update height dynamically
function updateHeight() {
  const heightSlider = document.getElementById('heightSlider');
  const heightValue = document.getElementById('heightValue');
  height = heightSlider.value;
  heightValue.textContent = `${height} cm`;
}

// Update weight dynamically
function updateWeight() {
  const weightSlider = document.getElementById('weightSlider');
  const weightValue = document.getElementById('weightValue');
  weight = weightSlider.value;
  weightValue.textContent = `${weight} kg`;
}

// Calculate BMI and update the display
function calculateBMI() {
  const bmiResult = document.getElementById('bmiResult');
  const bmiCategory = document.getElementById('bmiCategory');
  const emoji = document.getElementById('emoji');

  // BMI formula: weight (kg) / [height (m)]²
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // Determine category and emoji
  let category = '';
  let categoryEmoji = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    categoryEmoji = '😔';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal weight';
    categoryEmoji = '😊';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
    categoryEmoji = '😟';
  } else {
    category = 'Obese';
    categoryEmoji = '😱';
  }

  // Update UI
  bmiResult.textContent = bmi;
  bmiCategory.textContent = category;
  emoji.textContent = categoryEmoji;
}
