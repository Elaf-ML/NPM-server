// routes/page1.js
const express = require('express');
const router = express.Router();

// Define the top-level page1 route
router.get('/', (req, res) => {
  res.render('Page3', { title: 'video' });
});



module.exports = router;
