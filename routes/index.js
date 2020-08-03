const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//Passes the projects object to the index page
router.get('/', (req, res) => {
    res.render('index', {projects});
});

//Renders the about page
router.get('/about', (req, res) => {
    res.render('about');
});




module.exports = router;