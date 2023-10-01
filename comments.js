// Create web server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    res.send('Users page');
});

app.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get('/users/:id/comments', (req, res) => {
    res.send(`Comment of User ID: ${req.params.id}`);
});

app.get('/users/:id/comments/:commentId', (req, res) => {
    res.send(`Comment ID: ${req.params.commentId} of User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('Success');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});