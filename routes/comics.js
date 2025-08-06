const express = require('express');
const router = express.Router();
const comics = require('../data/comics');

//GET all comics
router.get('/', (req, res) => {
    res.json(comics);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comic = comics.find(c => c.id === id);
    if (!comic) {
        return res.status(404).json({ message: "Comic not found" });
    }
    res.json(comic);
});

module.exports = router;