const router = require('express').Router();
let Favourite = require('../models/Favourites.js');
const async = require("async");

router.route('/').get((req, res) => {
    Favourite.find()
        .then(favorites => res.json(favorites))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    Favourite.find()
        .then(favorites => res.json(favorites))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').get((req, res) => {
    const user = req.body.user;
    const book = req.body.book;

    const newFavorite = new Favourite({user,book})

    newFavorite.save()
        .then(() => res.json('Favorite added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;