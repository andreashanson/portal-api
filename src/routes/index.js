var express = require('express');
var router = express.Router();

const portal = require('./portal');

router.use(portal);

module.exports = router;
