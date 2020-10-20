const router = require('express').Router();
let Review = require('../models/Review');

router.route('/').get((req, res) => {
    Review.find()
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const rating = req.body.rating;
    const review = req.body.review;

    const newReview = new Review({name, rating, review});

    newReview.save()
        .then(() => res.json('Review added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;