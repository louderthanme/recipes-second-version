const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello from the API!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
