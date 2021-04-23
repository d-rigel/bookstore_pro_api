const express = require("express");
const router = express.Router();

//@desc Get genres
//@route GET /api/genres
router.get("/genres", (req, res) => {
    Genre.getGenres((err, genres) => {
        if (err) {
            throw err
        }
        res.json(genres)
    })
})

//@desc Get single genre
//@route GET /api/genres/:id
router.get("/genres/:_id", (req, res) => {
    let id = req.params._id
    Genre.getGenre(id, (err, genre) => {
        if (err) {
            throw err
        }
        res.json(genre)
    })
})

//@desc Add genres
//@route POST /api/genres
router.post("/genres", (req, res) => {
    let genre = req.body
    Genre.addGenres(genre, (err, genre) => {
        if (err) {
            throw err
        }
        res.json(genre)
    })
})

//@desc Update genres
//@route put /api/genres/:id
router.put("/genres/:_id", (req, res) => {
    let id = req.params._id
    let genre = req.body
    Genre.updateGenres(id, genre, {}, (err, genre) => {
        if (err) {
            throw err
        }
        res.json(genre)
    })
})

//@desc Delete genres
//@route DELETE /api/genres/:id
router.delete("/genres/:_id", (req, res) => {
    let id = req.params._id
    Genre.deleteGenres(id, (err, genres) => {
        if (err) {
            throw err
        }
        res.json(genres)
    })
})


module.exports = router;