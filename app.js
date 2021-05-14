const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config/.env' });
const movies = require('./src/routes/movies');
const comments = require('./src/routes/comments');

const app = express();

app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use('/movies', movies);
app.use('/comments', comments );

app.use('/', (req, res) => {
    res.send('Welcome to star war movies');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`server is running at port ${PORT}`));
