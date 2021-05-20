let express = require('express');
let dbConfig = require('../database/db');
let cors = require('cors');

// Express Route
const userRoute = require('./routes/user.routes')
const bookRoute = require('./routes/book.routes')
const favoriteRoute = require('./routes/favorite.routes')
const reviewRoute = require('./routes/review.routes')

// Connecting mongoDB Database
dbConfig.connectDb()

const app = express();

app.use(cors());
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));
app.use('/user', userRoute)
app.use('/books', bookRoute)
app.use('/favorite', favoriteRoute)
app.use('/review', reviewRoute)

// Port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use('/', (req, res) => {
    res.send('Port ' + port + ' is running!')
})