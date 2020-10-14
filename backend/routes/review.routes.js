const router = require('express').Router();
let Review = require('../models/Review');

router.route('/').get((req, res) => {
    Review.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newReview = new Review({username});

    newReview.save()
        .then(() => res.json('Review added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;