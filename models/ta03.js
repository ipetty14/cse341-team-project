const fs = require('fs');
const path = require('path');

let items = [];

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'ta03.json'
);

const getItemsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      return cb([]);
    }

    items = JSON.parse(data);

    cb(items);
  });
};

exports.fetchAll = (cb) => {
  getItemsFromFile(cb);
};

exports.filter = (search) => {
  return items.filter((item) => item.name.match(search));
};
