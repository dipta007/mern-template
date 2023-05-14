const mongoose = require('mongoose');
const { DB_URL } = require('../config/dotenv');

// connects our back end code with the database
mongoose.connect(DB_URL, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));