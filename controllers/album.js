const Collection = require('../models/collection');
const Album = require('../models/album');


module.exports = {
    detail
};

function detail(req, res) {
    Album.findById(req.params.id, function(err, album) {
        console.log(req.params.id, "this is the request object")
        res.render('collection/detail', {album});
        });
    };
