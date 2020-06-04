const express = require('express');
const router = express.Router();

const albumCtrl = require('../controllers/album');

router.get('/:id', albumCtrl.detail);
router.delete('/:collectionId/:albumId', albumCtrl.removeAlbum);
router.get('/:albumId/edit', albumCtrl.editAlbum);

module.exports = router;