const router = require('express').Router();
let Book = require('../models/Books');
const async = require("async");

router.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const bookID = req.body.bookID;
    const title = req.body.title;
    const authors = req.body.authors;
    const average_rating = req.body.average_rating;
    const isbn = req.body.isbn;
    const isbn13 = req.body.isbn13;
    const language_code = req.body.language_code;
    const num_pages = req.body.num_pages;
    const ratings_count = req.body.ratings_count;
    const text_reviews_count = req.body.text_reviews_count;
    const publication_date = req.body.publication_date;
    const publisher = req.body.publisher;

    const newBook = new Book({bookID,title,authors,average_rating,isbn,isbn13,language_code,num_pages,ratings_count,text_reviews_count,publication_date,publisher});

    newBook.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/adds').post((req, res) => {
    console.log(req.body);
    async.mapSeries(req.body,function iterator(book,cb) {
        const newBook = new Book(book);

        newBook.save(function(error){
            cb(error, newBook);
        });
        //    .then(() => res.json('Book added!'))
        //    .catch(err => res.status(400).json('Error: ' + err));

    }).catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;