"use strict"

const express = require('express')
const jokesCtl = require('../controllers/getJokesChuck')
const routes = express.Router()

routes.get('/', jokesCtl.getJokesChuck);

module.exports = routes;