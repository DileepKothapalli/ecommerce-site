const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of products');
});

router.get('/:id', (req, res) => {
  res.send(`Product with ID: ${req.params.id}`);
});

module.exports = router;
