const express = require('express');
const bodyParser = require('body-parser');
const { findFirstUniqueChar } = require('./utils/uniqueChar');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint
app.post('/first-unique-character', (req, res) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Endpoint /first-unique-character called with input: ${JSON.stringify(req.body)}`);

  const { text_to_process } = req.body;

  // Input validation
  if (!text_to_process || typeof text_to_process !== 'string') {
    return res.status(400).json({
      error: 'Invalid input. Please provide a valid "text_to_process" string.',
      timestamp,
    });
  }

  const index = findFirstUniqueChar(text_to_process);
  const response = {
    first_unique_char: index !== -1 ? text_to_process[index] : null,
    first_unique_char_index: index,
    timestamp,
  };

  res.json(response);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
