const mongoose = require("mongoose");

const genresSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Genre", genresSchema);

//@desc Get genres
module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit)
}

//@desc Get single genres
module.exports.getGenre = (id, callback) => {
    let query = {_id: id}
    Genre.findById(query, callback)
}

//@desc Add genres
module.exports.addGenres = (genre, callback) => {
    Genre.create(genre, callback)
}

//@desc update genres
module.exports.updateGenres = (id, genre, options, callback) => {
    let query = {_id: id}
    let update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback)
}

//@desc delete genres
module.exports.deleteGenres = (id, callback) => {
    let query = {_id: id}
    Genre.deleteMany(query, callback)
}