const { PORT } = require('./config/dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const routes = require('./router');
require('./models');


const app = express();
app.use(cors());

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Serve the static files from the React app
console.log(path.join(__dirname, 'client/'));
app.use(express.static(path.join(__dirname, '/../', 'client/build/')));

// append /api for our http requests
app.use('/api', routes);

// Handles any requests that don't match the ones above
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../', 'client/build/index.html'));
});

// launch our backend into a port
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));