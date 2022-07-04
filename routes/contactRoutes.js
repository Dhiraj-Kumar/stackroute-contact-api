const express = require('express');
const { GetContacts, GetContact, AddContact, UpdateContact, DeleteContact } = require('../controllers/ContactController');
const router = express.Router();

router.get('/contacts', GetContacts);
router.get('/contacts/:id', GetContact);
router.post('/contacts', AddContact);
router.put('/contacts/:id', UpdateContact);
router.delete('/contacts/:id', DeleteContact);

module.exports = router;