const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/tial')));

// Handle all GET requests and send index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/tial/index.html'));
});

// Start the app on port 8080 or any available port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
