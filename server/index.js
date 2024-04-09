// index.js
const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}
const serveAbout = (req, res, next) => {
    res.send('<h1>i know nothing about u</h1>');
}
const serveHello = (req, res, next) => {
    const name = req.query.name || "there"
    res.send(`Hello ${name}!!`);
}
const serveBesties = (req, res, next) => {
    const besties = [{ name: 'Nicole' }, { name: 'Roe' }, { name: 'Elijah' }, { name: 'Mo' }];
    res.send(besties);
}




//endpoints
app.get('/', serveIndex)
app.get('/api/hello', serveHello);
app.get('/api/name', serveBesties);
app.get('/about', serveAbout);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 
