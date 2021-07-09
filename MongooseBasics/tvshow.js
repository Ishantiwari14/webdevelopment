const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tvshowApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!!!!')
    })
    .catch(err => {
        console.log("Error occured");
        console.log(err)
    })

const tvshowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },

    imdb: {
        type: Number,
        required: true,
        min: [1, 'At least bad']
    },
    finished: {
        type: Boolean,
        default: true
    },
    categories: {
        type: [String],
        default: ['drama']
    },

    no_of_seasons: {

        seasons: {
            type: Number,
            default: 1
        },
        episodes: {
            type: Number,
            default: 5
        }
    },
    rating: {
        type: String,
        enum: ['R', 'PG', 'PG-13', 'G'],
        default: 'PG-13'
    }

})

tvshowSchema.methods.greeter = function () {
    console.log(`${this.name} added`)
}

tvshowSchema.methods.stillrunning = function () {
    this.finished = !this.finished
    return this.save()
}
const Tvshow = mongoose.model('Tvshow', tvshowSchema);
// const shows = new Tvshow({ name: 'Community', finished: false, imdb: 8.2, categories: ['comedy', 'drama', 'concept'], no_of_seasons: { seasons: 6, episodes: 100 } })
// shows.save()
//     .then(data => console.log(data))
//     .catch((err) => {
//         console.log("Oh No Error!!!")
//         console.log(err)
//     })

const findShow = async () => {
    const foundShow = await Tvshow.findOne({ name: 'Friends' })
    console.log(foundShow)
    foundShow.greeter();
    console.log(foundShow)
    await foundShow.stillrunning();
    console.log(foundShow)
}

findShow();