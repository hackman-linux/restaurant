const express = require('express');
const app = express();

// Define a list of possible responses for each input
const responses = {
  'hello': [
    'Hello! Welcome to our restaurant. How can I help you today?',
    'Hi there! What brings you to our restaurant?',
    'Hey! How can I assist you today?'
  ],
  'menu': [
    'Here\'s our menu: https://example.com/menu',
    'We have a variety of dishes to choose from. What type of cuisine are you in the mood for?',
    'Our menu is available online. Would you like me to send you the link?'
  ],
  'order': [
    'Great choice! What would you like to order?',
    'Awesome! Can you please specify the dish you\'d like to order?',
    'What can I get for you today?'
  ],
  'hours': [
    'We\'re open from 11am to 10pm, Monday to Friday.',
    'Our hours are 11am to 10pm, Monday to Friday. We\'re closed on weekends.',
    'You can find our hours of operation on our website.'
  ],
  'default': [
    'I didn\'t quite understand that. Can you please rephrase?',
    'Sorry, I\'m not sure what you mean. Can you please try again?',
    'I\'m not sure I understand. Can you please provide more context?'
  ]
};

// Define a function to generate a random response
function getRandomResponse(input) {
  const responsesForInput = responses[input.toLowerCase()];
  if (responsesForInput) {
    return responsesForInput[Math.floor(Math.random() * responsesForInput.length)];
  } else {
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  }
}

// Set up the chatbot endpoint
app.post('/chat', (req, res) => {
  const userInput = req.body.input;
  const response = getRandomResponse(userInput);
  res.json({ response });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});