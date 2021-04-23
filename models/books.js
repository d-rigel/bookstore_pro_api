const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String, 
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
    },
    pages: {
        type: String,
    },
    image_url: {
        type: String,
    },
    buy_url: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Book", booksSchema);

//@desc Get books
module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit)
}

//@desc Get single book
module.exports.getBook = (id, callback) => {
    let query = {_id: id}
    Book.findById(query, callback)
}

//@desc Add books
module.exports.addBooks = (book, callback) => {
    Book.create(book, callback)
}

//@desc update books
module.exports.updateBooks = (id, book, options, callback) => {
    let query = {_id: id}
    let update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url

    }
    Book.findOneAndUpdate(query, update, options, callback)
}

//@desc Delete books
module.exports.deleteBooks = (id, callback) => {
    let query = {_id: id}
    Book.deleteMany(query, callback)
}
