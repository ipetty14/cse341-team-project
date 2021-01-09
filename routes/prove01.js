const express = require('express');
const fs = require('fs'); // File system for TA01
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const { route } = require('./ta01');

const users = [];

router.get('/', (req, res, next) => {
  res.render(path.join(rootDir, 'views', 'pages', 'create-user.ejs'), {
    title: 'Prove 01 - Create User',
    path: '/prove01', // For pug, EJS
  });
});

router.post('/create-user', (req, res, next) => {
  console.log(req.body);
  users.push({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    shortBio: req.body.shortBio,
  });
  res.redirect('/prove01/view-users');
});

router.get('/view-users', (req, res, next) => {
  res.render(path.join(rootDir, 'views', 'pages', 'view-users.ejs'), {
    users: users,
    title: 'Prove 01 - View Users',
    path: '/prove01/view-users', // For pug, EJS
  });
});

module.exports = router;
