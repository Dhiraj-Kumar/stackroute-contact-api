const repo = require('../repository/ContactRepository');

function GetContacts(req, res) {
    repo.GetContacts().then(data => {
        res.status(200).send(data);
    });
}

function GetContact(req, res) {
    repo.GetContact(req.params.id).then(data => {
        res.status(200).send(data);
    });
}

function AddContact(req, res) {
    repo.AddContact(req.body).then(data => {
        res.status(201).send(data);
    });
}

function UpdateContact(req, res) {
    repo.UpdateContact(req.params.id, req.body).then(data => {
        res.status(200).send(data);
    });
}

function DeleteContact(req, res) {
    repo.DeleteContact(req.params.id).then(data => {
        res.status(200).send(data);
    });
}

module.exports = { GetContacts, GetContact, AddContact, UpdateContact, DeleteContact };