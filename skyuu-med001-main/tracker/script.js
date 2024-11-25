// Function to update displayed values from sliders and show smiley faces
function updateValue(id, value, faceId) {
    const sliderValue = document.getElementById(id);
    sliderValue.innerText = value;

    // Update smiley face based on value
    const emojiFace = document.getElementById(faceId);
    if (id === 'heartRateValue') {
        if (value < 60) {
            emojiFace.innerText = '😢'; // Sad face for low heart rate
        } else if (value >= 60 && value <= 100) {
            emojiFace.innerText = '😊'; // Happy face for normal heart rate
        } else {
            emojiFace.innerText = '😟'; // Concerned face for high heart rate
        }
    } else if (id === 'stepsValue') {
        if (value < 5000) {
            emojiFace.innerText = '😢'; // Sad face for low steps
        } else if (value >= 5000 && value < 10000) {
            emojiFace.innerText = '😊'; // Happy face for moderate steps
        } else {
            emojiFace.innerText = '😁'; // Very happy face for high steps
        }
    } else if (id === 'sleepValue') {
        if (value < 6) {
            emojiFace.innerText = '😴'; // Sleepy face for low sleep
        } else if (value >= 6 && value <= 8) {
            emojiFace.innerText = '😊'; // Happy face for good sleep
        } else {
            emojiFace.innerText = '😴'; // Sleepy face for excessive sleep
        }
    }

    // Add animation effect as the value changes
    sliderValue.style.transform = 'scale(1.2)';
    emojiFace.style.transform = 'scale(1.2)';
    setTimeout(() => {
        sliderValue.style.transform = 'scale(1)';
        emojiFace.style.transform = 'scale(1)';
    }, 200);
}

// Function to track health data
function trackHealthData() {
    // Get user input values from sliders
    let heartRate = document.getElementById('heartRateSlider').value;
    let steps = document.getElementById('stepsSlider').value;
    let sleep = document.getElementById('sleepSlider').value;

    // Animate progress bars
    animateProgressBar('heartRateBar', heartRate, 180);
    animateProgressBar('stepsBar', steps, 15000);
    animateProgressBar('sleepBar', sleep, 12);

    // Display health messages
    displayHealthFeedback(heartRate, steps, sleep);
}

function animateProgressBar(barId, value, maxValue) {
    let progressBar = document.getElementById(barId);
    let percentage = Math.min((value / maxValue) * 100, 100);
    progressBar.style.width = percentage + '%';
}

function displayHealthFeedback(heartRate, steps, sleep) {
    let result = document.getElementById('result');
    let heartRateMessage = '', stepsMessage = '', sleepMessage = '';

    if (heartRate < 60) {
        heartRateMessage = 'Your heart rate is low. Consult a healthcare provider.';
    } else if (heartRate >= 60 && heartRate <= 100) {
        heartRateMessage = 'Your heart rate is normal. Great!';
    } else {
        heartRateMessage = 'Your heart rate is high. Relax or consult a doctor.';
    }

    if (steps < 5000) {
        stepsMessage = 'Increase your activity. Aim for 10,000 steps/day.';
    } else if (steps >= 5000 && steps < 10000) {
        stepsMessage = 'Good job! Try for 10,000 steps/day.';
    } else {
        stepsMessage = 'Fantastic! You’ve reached your activity goals.';
    }

    if (sleep < 6) {
        sleepMessage = 'You need more sleep. Aim for 7-8 hours/night.';
    } else if (sleep >= 6 && sleep <= 8) {
        sleepMessage = 'You’re sleeping well. Keep it up!';
    } else {
        sleepMessage = 'You might be oversleeping. Balance is key.';
    }

    result.innerHTML = `<p><strong>Heart Rate:</strong> ${heartRateMessage}</p>
                        <p><strong>Steps:</strong> ${stepsMessage}</p>
                        <p><strong>Sleep:</strong> ${sleepMessage}</p>`;
    result.style.opacity = 1;  // Fade in effect
}

// Weekly progress chart using Chart.js
const ctx = document.getElementById('weeklyChart').getContext('2d');
const weeklyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Steps',
            data: [5000, 7000, 8000, 6000, 9000, 10000, 12000],
            borderColor: '#2c97de',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#2c97de',
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 1000,  // Animation speed
            easing: 'easeInOutBounce'  // Easing type
        }
    }
});
