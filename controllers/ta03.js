const Item = require('../models/ta03');

exports.getTA03 = (req, res, next) => {
  const item = Item.fetchAll((items) => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      items: items,
    });
  });
};

exports.getFilteredResults = (req, res, next) => {
  const filteredItems = Item.filter(req.query.search);

  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    items: filteredItems,
  });
};
