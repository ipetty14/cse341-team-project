/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or correct yours off of after working at least 1 hour on Team Activity 02.
 * The main purpose of the app is to 
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01'); // Not necessary for team activity 02
const ta03Routes = require('./routes/ta03'); // Core requirement 03
const ta04Routes = require('./routes/ta04'); // Stretch challenge 02

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   // For view engine as Pug
   //.set('view engine', 'pug') // For view engine as PUG. 
   // For view engine as hbs (Handlebars)
   //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
   //.set('view engine', 'hbs')
   .use('/ta01', ta01Routes) // Not necessary for team activity 02
   .use('/ta03', ta03Routes) // Core requirement 03
   .use('/ta04', ta04Routes) // Stretch challenge 02
   .get('/', (req, res, next) => {
     // This is the primary index
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // This will serve as our 404 page for stretch challenge 01
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));
