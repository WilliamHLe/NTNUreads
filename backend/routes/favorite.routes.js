const router = require('express').Router();
let Book = require('../models/Books');
let User = require('../models/User');
const async = require("async");

router.route('/user/:user').get((req, res) => {
    User.findOne({_id: req.params.user})
        .populate("books")
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/book/:book').get((req, res) => {
    Book.findOne({_id: req.params.book})
        .populate("users")
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    User.findOneAndUpdate({_id: req.body.user},
        {$push: {books: req.body.book}},
        { new: true, useFindAndModify: false })
        .then(users => {
            Book.findOneAndUpdate({_id: req.body.book},
                {$push: {users: req.body.user}},
                { new: true, useFindAndModify: false })
                .then(books => {
                    res.json(books);
                })
        })
})



module.exports = router;