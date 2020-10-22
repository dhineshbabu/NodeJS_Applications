const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
   var log = `${now}: ${req.method} ${req.url}`;
   console.log(log);
   fs.appendFileSync('Server.log', log + '\n', (err) => {
       if(err) {
           console.log('Unable to append to Server log file');
       }
   })
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

/*app.get('/', (req, res) => {
    //res.send('<h1> Hello.. This is Kanu...</h1>');
    res.send({
        name: 'Andrew',
        likes: [
            'Biking',
            'Cities'
        ]
    });
});*/

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: "Hello Welcome To My Crazy World of INSTRUCTIONS",
        //currentYear: new Date().getFullYear(),
    });
});
app.get('/about', (req, res) => {
    //res.send('<h1> About Page </h1>');
    res.render('about.hbs', {
        pageTitle: 'About Page',
        
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    })
});

// /bad - send back json with errorMessage property
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Bad Request'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});