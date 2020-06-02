const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('collection/index', { title: 'Record Bin' });
  });

module.exports = router;
