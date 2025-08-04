const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Load system prompt
const SYSTEM_PROMPT_PATH = path.join(__dirname, "info.txt");
const systemPrompt = fs.readFileSync(SYSTEM_PROMPT_PATH, "utf-8").trim();

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await axios.post('https://api.together.xyz/v1/chat/completions', {
      model: 'meta-llama/Llama-3.3-70B-Instruct-Turbo-Free', // You can change this model
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 512
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.TOGETHER_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log(`Bot:` , response);
    const reply = response.data.choices[0].message.content.trim();
    res.json({ reply });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Something went wrong with the chatbot API' });
  }
});

app.listen(PORT, () => {
  console.log(`Chatbot server running on http://localhost:${PORT}`);
});
