const express = require('express'); 

const Sequelize = require('sequelize');

const routes = require('./routes');

const app = express();

const sequelize = require('./sequelize');

app.use(express.json());

app.use(routes);

app.listen(3333);


