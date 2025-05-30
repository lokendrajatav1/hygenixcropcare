const express = require('express');
const router = express.Router();

const { submitContact, getAllContacts } = require('../controllers/contactController');

// POST - Submit contact form
router.post('/', submitContact);

// GET - Get all contact messages
router.get('/', getAllContacts);

module.exports = router;
