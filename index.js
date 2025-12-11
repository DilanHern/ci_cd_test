const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Pipeline!');
});

app.get('/aa', (req, res) => {
  res.send('Hello from CI/CD Pipeline aaaa!');
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});