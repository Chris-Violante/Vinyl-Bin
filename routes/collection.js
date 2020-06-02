const express = require('express');
const router = express.Router();

const collectionCtrl = require('../controllers/collection');


router.get('/', collectionCtrl.userCollection);
router.post('/', collectionCtrl.newAlbum);





module.exports = router;