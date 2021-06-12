// const cat = {
//     name: 'funke',
//     color: 'grey',
//     breed: 'dhade',
//     meow() {
//         console.log('meow');
//     },
//     roar: function () {
//         console.log(this.meow());
//     }
// }

// try {
//     hello.toUpperCase();
// } catch {
//     console.log('Error!')

// }

// console.log('hey jude ')


// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(5))
//     } catch (e) {
//         console.log(e);
//         console.log("Please pass a string next time.")
//     }
// }

// const numbers = []

// for (let i = 0; i < 20; i++) {
//     numbers.push(i + 1);
// }
// function print(element) {
//     console.log(element)
// }
// print(numbers[0])
// print(numbers[1])

// numbers.forEach(function (el) {
//     console.log(el)
// })

// for (let el of numbers){
//     console.log(el);
// }


const movies = [
    {
        title: 'amadeus',
        score: 99
    },
    {
        title: 'stand by me',
        score: 85,
        bad() {
            console.log(`${this.title} is bad`);
        }
    },
    {
        title: 'parasite',
        score: 90
    },

    {
        title: 'Alien',
        score: 90
    }
]

// movies.forEach(function (el) {
//     console.log(`${el.title} - ${el.score}/100`)

// });

// const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// const caps = texts.map(function (t) {
//     return t.toUpperCase();
// });
// texts;
// caps;

// const nums = [1, 2, 3, 4, 5];

// const sqaure = nums.map (function (t) {
//     return t * t;
// });
// console.log("hey")
// setTimeout(() => console.log("hello"), 3000)
// console.log('goodbye')


// const id = setInterval(() => console.log(Math.random()), 2000)
// clearInterval(id);

// const titles = movies.map(function (movie) {
//     return movie.title;
// // })

// const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)

const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map((i) => i.title)

const other = movies.filter(m => m.score > 80).map(m => m.title)


const exams = [80, 33, 45, 786, 87, 34, 69, 98, 45, 23, 67, 80, 78]

console.log(exams.some(score => score >= 75))

