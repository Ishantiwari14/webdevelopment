const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

Movie.insertMany([
    { title: 'Catch me if you can', year: 2000, score: 9, rating: 'R' },
    { title: 'How I met your Mother', year: 2010, score: 8.5, rating: 'R' },
    { title: 'Fight Club', year: 1999, score: 9.8, rating: 'R' },
    { title: 'Harry Potter', year: 2000, score: 8.4, rating: 'PG' },
    { title: 'Django Unchained', year: 2014, score: 9.5, rating: 'PG-13' },

])
    .then(data => {
        console.log("It works ");
        console.log(data);
    })
    .catch(err => {
        console.log(`Oh god! Error: ${err}`);
    })


