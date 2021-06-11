let maximum = parseInt(prompt("Enter your maximum number"));
console.log(maximum);

while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid max number"));
}

const targetNum = Math.floor(Math.random() * maximum + 1);
console.log(targetNum);
let guess = parseInt(prompt("Please enter your guess"));
let tries = 1;

while (parseInt(guess) !== targetNum) {
    tries++;
    if (guess === 'q') break;
    if (guess > targetNum) {
        guess = prompt("Too high, guess again.");
    } else {
        guess = prompt("Too low, guess again.");
    }

}
if (guess === 'q') {
    console.log("Ok you quit.");

} else {
    console.log(`Congrats you got it in ${tries} times.`);
}