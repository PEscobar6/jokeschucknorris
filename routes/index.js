'use strict'

const express = require('express');
const router = express.Router();

router.get("/ping", (req, res) => {
  res.status(200).send("Pong");
});

router.use("/jokes", require('./jokes'));

module.exports = router;
