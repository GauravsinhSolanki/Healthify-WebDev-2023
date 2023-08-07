const express = require('express');
const routes = require('./indexRouter');
const mongoose = require("mongoose");
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();


const DB =
    "mongodb+srv://Gaurav:gauravuser@cluster0.1bbevrk.mongodb.net/Appointment-Booking";

mongoose
    .connect(DB)
    .then(() => {
        console.log("successfull");
    })
    .catch((err) => {
        console.log("no connections", err);
    });

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/', routes);

//Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

