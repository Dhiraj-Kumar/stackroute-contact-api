const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/api/v1', contactRoutes);

mongoose.connect('mongodb+srv://mongoadmin:FWLP3f1xyuwipcIy@cluster0.zojd6.mongodb.net/ContactsDB');
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
}).on('error', (err) => {
    console.log(err);
});

let port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});