const express = require('express');
const cors = require('cors');
const dataFunc = require('./product-data/index');

const app = express();
app.use(cors());

app.get('/api/product-data', (req, res) => {
  dataFunc(req, res);
});

const PORT = 4000;
app.listen(PORT, () => `listening on ${PORT}`);
