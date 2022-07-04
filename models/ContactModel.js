const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('ContactModel', contactSchema, 'Contacts');