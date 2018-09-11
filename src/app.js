'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb://mhst3ch:mhst3ch@ds018258.mlab.com:18258/ndestr');

// Carrega os Models

const Product = require('./models/product');

// Carrega rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;