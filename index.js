'use strict';

const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// homepage - landing page
app.get('/', (req, res) => {
  res.render('landing');
});

const lip = require('./lip.json');

// listing
app.get('/listing', (req, res) => {
  res.render('listing', { lip: lip });
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {

  if (err) {
    throw new Error(err);
  }

  console.log('serving at: ', PORT);
})
