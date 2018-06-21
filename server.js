const  express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    let now = new Date().toString();

    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs', {
//         pageTitle: "Maintenance",
//         currentYear: new Date().getFullYear(),
//         welcomeMessage: "Not Working"
//     })
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('about.hbs', {
        pageTitle: "Home Page, Welcome!",
        currentYear: new Date().getFullYear(),
        welcomeMessage: "Welcome to my website"
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: "About",
        currentYear: new Date().getFullYear()
    })
});

app.listen(port, () => {
    console.log(`Server running port ${port}`);
});