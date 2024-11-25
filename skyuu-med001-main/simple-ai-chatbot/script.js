// Show and hide chatbot window
document.getElementById('chatbot-icon').addEventListener('click', function() {
    document.getElementById('chatbot-window').classList.toggle('hidden');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('chatbot-window').classList.add('hidden');
  });
  
  // Handling user input
  document.getElementById('send-btn').addEventListener('click', function() {
    sendMessage();
  });
  
  document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
  
    if (message === '') return;
  
    // Add user message to chat
    const chatContent = document.getElementById('chat-content');
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerHTML = `<strong>You:</strong> ${message}`;
    chatContent.appendChild(userMessage);
  
    // Clear input field
    input.value = '';
  
    // Call backend to get chatbot response
    fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then(response => response.json())
      .then(data => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.innerHTML = `<strong>Bot:</strong> ${data.response}`;
        chatContent.appendChild(botMessage);
      })
      .catch(error => console.error('Error:', error));
  }
  