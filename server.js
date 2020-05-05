const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const bodyParser = require('body-parser')
const server = express();
const cors = require('cors');
const expressip = require('express-ip');

mongoose.Promise = global.Promise;
server.use(bodyParser.json());
server.use(cors());
server.use(expressip().getIpInfoMiddleware);
routes(server);

server.listen(3040, () => {

    mongoose.connect('mongodb://localhost/soapandsoftapi',{ useNewUrlParser: true });

    mongoose.connection.once('open',() => {
        console.log('Connexion OK');
    })
    .on('error', (error) => {
        console.warn('Erreur connexion', error)
    })
})