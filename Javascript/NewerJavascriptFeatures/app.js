// function rollDie(numSides) {
//     (numSides === undefined) ? (numSides = 10) : numSides;
//     return Math.floor(Math.random() * numSides) + 1;
// }

function multiply(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}


function sum(a, b = 0) {
    return a + b;

}

const rollDie = function (numsides = 6) {
    return Math.floor(Math.random() * numsides) + 1;
}


const cats = ['blue', 'scout', 'rocket'];
const dogs = ['rusty', 'wyatt'];

const allPets = [...cats, ...dogs]


// function sum() {
//     return arguments.reduce((total,el) => total + el)
// }


function sum(...nums) {
    console.log(nums)
    return nums.reduce((total, el) => total + el)
}

const scores = [1, 23, 45, 65, 76, 87]

const highscore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(`gold is ${gold}`)
console.log(`silver is ${silver}`)
console.log(...everyoneElse)


const user = {
    email: 'harvey@gmail.com',
    password: 'scothishn34',
    firstName: 'harvey',
    lastName: 'Milk',
    born: 1920,
    died: 1798,
    bio: 'Hahahahahah',
    city: 'world',
    state: 'mostly solid & liquid'
}

const { email, firstName, lastName, bio } = user;

const { born: birthYear, died: deathYear } = user;

const anotherUser = { ...user }

function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}