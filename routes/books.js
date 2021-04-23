const express = require("express");
const router = express.Router();

//@desc Get books
//@route GET /api/books
router.get("/books", (req, res) => {
    Book.getBooks((err, books) => {
        if (err) {
            throw err
        }
        res.json(books)
    })
})

//@desc Get single book
//@route GET /api/books/:id
router.get("/books/:_id", (req, res) => {
    let id = req.params._id
    Book.getBook(id, (err, book) => {
        if (err) {
            throw err
        }
        res.json(book)
    })
})

//@desc Add books
//@route POST /api/books
router.post("/books", (req, res) => {
    let book = req.body
    Book.addBooks(book, (err, book) => {
        if (err) {
            throw err
        }
        res.json(book)
    })
})

//@desc Update books
//@route PUT /api/books/:id
router.put("/books/:_id", (req, res) => {
    let id = req.params._id
    let book = req.body
    Book.updateBooks(id, book, {}, (err, book) => {
        if (err) {
            throw err
        }
        res.json(book)
    })
})

//@desc Delete books
//@route DELETE /api/books/:id
router.delete("/books/:_id", (req, res) => {
    let id = req.params._id
    Book.deleteBooks(id, (err, books) => {
        if (err) {
            throw err
        }
        res.json(books)
    })
})



module.exports = router;