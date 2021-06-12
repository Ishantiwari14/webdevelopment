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

