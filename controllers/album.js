const Collection = require('../models/collection');
const Album = require('../models/album');


module.exports = {
    detail
};

function detail(req, res) {
    Album.findById(req.params.id, function(err, album) {
        res.render('collection/detail', {album});
        });
    };
