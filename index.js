/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling.
 * They're for information purposes only.
 *
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course.
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000
const session = require('express-session');
const app = express();

// Route setup. You can implement more in the future!
// Team Activity Routes
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03');
const ta04Routes = require('./routes/ta04');
const ta05Routes = require('./routes/ta05');

// Prove Assignment Routes
const prove01Routes = require('./routes/prove01');
const prove02Routes = require('./routes/prove02');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(
  session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
  })
);

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // For view engine as Pug
  //.set('view engine', 'pug') // For view engine as PUG.
  // For view engine as hbs (Handlebars)
  //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
  //.set('view engine', 'hbs')
  .use(express.urlencoded({ extended: false })) // For parsing the body of a POST
  .use(methodOverride('_method'))
  .use('/ta01', ta01Routes)
  .use('/ta02', ta02Routes)
  .use('/ta03', ta03Routes)
  .use('/ta04', ta04Routes)
  .use('/ta05', ta05Routes)
  .use('/prove01', prove01Routes)
  .use('/prove02', prove02Routes)
  .get('/', (req, res, next) => {
    // This is the primary index, always handled last.
    res.render('pages/index', {
      title: 'Welcome to my CSE341 repo',
      path: '/',
    });
  });

app.use((req, res, next) => {
  res
    .status(404)
    .render('pages/404', { title: '404 - Page Not Found', path: req.url });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
