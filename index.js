const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ejs = require('ejs');

const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are valid
    if (username === 'admin' && password === 'password') {
        req.session.isLoggedIn = true;
        res.redirect('/dashboard');
    } else {
        res.render('index', { error: 'Invalid username or password' });
    }
});

app.get('/dashboard', (req, res) => {
    if (req.session.isLoggedIn) {
        res.render('dashboard');
    } else {
        res.redirect('/');
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});