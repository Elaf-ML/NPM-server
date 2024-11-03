// routes/page2.js
const express = require('express');
const router = express.Router();

// Define the top-level page2 route
router.get('/', (req, res) => {
  res.render('page2', { title: 'Job Application' });
});

// Define a subpage route
router.get('/subpage1', (req, res) => {
  res.render('subpage', { title: 'Subpage 1' });
});

// Define another subpage route
router.get('/subpage2', (req, res) => {
  res.render('subpage', { title: 'Subpage 2' });
});

module.exports = router;
