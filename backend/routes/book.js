var express = require('express');
var router = express.Router();
var Book = require('../models/book.js');

/* GET ALL BOOKS */
router.get('/', async (req, res, next) => {
  try {
    const products = await Book.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', async (req, res, next) => {
  try {
    const post = await Book.findById(req.params.id);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

/* SAVE BOOK */
router.post('/', async (req, res, next) => {
  try {
    const post = await Book.create(req.body);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

/* UPDATE BOOK */
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

/* DELETE BOOK */
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
