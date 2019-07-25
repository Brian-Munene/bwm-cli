const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals')

mongoose.connect("cmongodb+srv://bwm-user:bwm-pass@m0-fpl87.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true}).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDB();
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(3001, function(){
    console.log('App is running!');
});