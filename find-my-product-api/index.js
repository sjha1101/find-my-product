// find-my-product-api/index.js

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/', (req, res) => {
  res.send('login');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
