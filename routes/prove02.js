const express = require('express');
const fs = require('fs'); // File system for TA01
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const { route } = require('./ta01');

const books = [];

router.get('/', (req, res, next) => {
  res.render(path.join(rootDir, 'views', 'pages', 'prove02.ejs'), {
    title: 'Prove 02 - Library',
    path: '/prove02', // For pug, EJS
    books: books,
  });
});

router.post('/add-book', (req, res, next) => {
  books.push({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    isbn: req.body.isbn,
  });
  res.status(201);
  res.redirect('/prove02');
});

module.exports = router;
