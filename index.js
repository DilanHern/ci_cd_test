const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Pipeline!');
});

app.get('/aa', (req, res) => {
  res.send('Hello from CI/CD Pipeline aaaa!');
});

// solo se arranca el servidor cuando se ejecute directamente: node index.js
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

// exporta la instancia de express para supertest / Vercel
module.exports = app;