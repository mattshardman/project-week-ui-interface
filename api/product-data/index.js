const productData = require('./data');

module.exports = (req, res) => {
  res.end(JSON.stringify(productData));
};
