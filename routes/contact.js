// routes/page1.js
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('contact', { title: 'contact' });
});



module.exports = router;
