const express = require('express');
const api = express();
const logger = require('morgan');

const productRoutes = require('./routes/products.js');

api.use(logger('dev'));

api.use('/products', productRoutes);

module.exports = api;