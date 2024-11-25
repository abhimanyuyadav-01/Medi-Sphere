const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Chatbot API
app.post('/api/chatbot', (req, res) => {
  const userMessage = req.body.message;

  // Here you can connect to an AI or logic to generate responses
  let botResponse = '';

  if (userMessage.toLowerCase().includes('headache')) {
    botResponse = 'It sounds like you might be experiencing a headache. Please consult a doctor for a detailed diagnosis.';
  } else {
    botResponse = "I'm sorry, I don't have enough information on that. Please contact a medical professional.";
  }

  res.json({ response: botResponse });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
