const express = require('express');
const router = express.Router();

const albumCtrl = require('../controllers/album');

router.get('/:id', albumCtrl.detail);

module.exports = router;