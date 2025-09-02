// find-my-product-api/index.js

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
