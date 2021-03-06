const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected!");
})


const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random = Math.floor(Math.random() * 1000) + 1;
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            location: `${cities[random].city}, ${cities[random].state}`,
            title: `${sample(descriptors)} ${sample(places)} `,
            image: 'https://source.unsplash.com/collection/4651015/',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, quaerat, fuga totam ea natus dolorum, corrupti et beatae officiis non molestiae dolor fugit ullam alias dolores est quas soluta iure.',
            price: price,
        })
        await camp.save();
    }

}

seedDB().then(() => {
    mongoose.connection.close();
})