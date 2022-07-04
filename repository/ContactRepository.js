const ContactModel = require('../models/ContactModel');
const { v4: uuidv4 } = require('uuid');
function GetContacts() {
    return new Promise((resolve, reject) => {
        ContactModel.find({}, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function GetContact(id) {
    return new Promise((resolve, reject) => {
        ContactModel.findOne({ _id: id }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function AddContact(contact) {
    return new Promise((resolve, reject) => {
        let newcontact = new ContactModel({
            _id: uuidv4(),
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            city: contact.city,
            phone: contact.phone
        });
        newcontact.save((err) => {
            if (!err) {
                resolve('New Contact created successfully');
            } else {
                reject(err);
            }
        });
    });
}

function UpdateContact(id, contact){
    return new Promise((resolve, reject) => {
        let newcontact = new ContactModel({
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            city: contact.city,
            phone: contact.phone
        });
        ContactModel.findOneAndUpdate({ _id: id }, newcontact, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function DeleteContact(id){
    return new Promise((resolve, reject) => {
        ContactModel.deleteOne({ _id: id }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = { GetContacts, GetContact, AddContact, UpdateContact, DeleteContact };