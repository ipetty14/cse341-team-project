const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const users = [];
const errors = [];

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'User Management - Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: users,
    errors: errors,
  });
});

router.post('/add-user', (req, res, next) => {
  const userExists = users.filter((user) => user.email === req.body.email);

  if (userExists == undefined || userExists.length == 0) {
    users.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      shortBio: req.body.shortBio,
    });

    res.status(201);
  } else {
    const date = new Date();

    errors.push({
      id: uuid.v4(),
      code: '400',
      message: 'A user with that email already exists. Please try again.',
      timestamp: date.toDateString() + ' ' + date.toLocaleTimeString(),
    });

    res.status(400);
  }

  res.redirect('/ta02');
});

router.delete('/remove-user', (req, res, next) => {
  // Logic to find user to be deleted.
  const userToRemove = users.filter((user) => user.email === req.body.email);

  if (userToRemove == undefined || userToRemove.length == 0) {
    const date = new Date();

    errors.push({
      id: uuid.v4(),
      code: '404',
      message: 'The email address could not be found. Please try again.',
      timestamp: date.toDateString() + ' ' + date.toLocaleTimeString(),
    });

    res.status(404);
    res.redirect('/ta02');
  }

  // Get the index of the user
  const indexOfUserToRemove = users.indexOf(userToRemove);

  // Splice array and remove user at the given index.
  if (indexOfUserToRemove !== -1) {
    users.splice(indexOfUserToRemove, 1);
  }

  // Redirect to page.
  res.status(204);
  res.redirect('/ta02');
});

module.exports = router;
