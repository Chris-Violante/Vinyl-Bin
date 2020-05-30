const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    artist: {
        required: true,
        type: String
    },
    title: {
        required: true, 
        type: String
    }, 

    coverArt: {
        required: true,
        type: String
    },
    releaseYear: Number,
    catalogNumber: String,
});

module.exports = mongoose.model('Album', albumSchema);