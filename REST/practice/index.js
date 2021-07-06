const express = require('express');
const app = express();
const path = require('path');
const methodoverride = require('method-override');


const {v4:uuid} = require('uuid');
uuid();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodoverride('_method'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



let locations = [
    {
        id: uuid(),
        location: 'Fedikuna, Lamjung',
        review: 'Nice green place'
    },
    {
        id:uuid(),
        location: 'Lakeside, Pokhara',
        review: 'Worst memory ever'
    },
    {
        id:uuid(),
        location: 'Ekantakuna, Lalitpur',
        review: 'Polluted, Noisy'
    },
    {
        id: uuid(),
        location: 'Dhakaltar, Tanahun',
        review: 'Small peaceful place'
    }
]

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/reviews', (req, res) => {

    res.render('reviews/index', {locations})
})

app.get('/reviews/new', (req, res) => {
    res.render('reviews/new')
})

app.post('/reviews', (req,res) => {
    const {location, review} = req.body;
    locations.push({location, review, id: uuid()})

    res.redirect('/reviews')
})

app.get('/reviews/:id', (req, res) => {
    const {id} = req.params;
    const location = locations.find(l => l.id === id);
    res.render('reviews/show', { location})
    res.redirect('/reviews')
    
})

app.get('/reviews/:id/edit', (req, res) => {
    const {id} = req.params;
    const location = locations.find(l => l.id === id);
    res.render('reviews/edit', {location})
    res.redirect('/reviews')
})

app.delete('/reviews/:id', (req, res) => {
    const {id} = req.params;
    locations = locations.filter(l => l.id !== id);
    res.redirect('/reviews')
    
})

app.patch('/reviews/:id', (req, res) => {
    const {id}  = req.params;
    const newReviewtext = req.body.review;
    const location = locations.find(l => l.id === id);
    location.review = newReviewtext;    

    res.redirect('/reviews')
})

app.listen('3000', () => {
    console.log("listening on port 3000")
})