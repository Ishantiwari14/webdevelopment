console.log("Its working");
let random = Math.random();

if (random < 0.5) {
    console.log("yipp yipp " + random)
} else {
    console.log(random)
}
console.log("After conditional")



const dayOfWeek = 'saturday';

if (dayOfWeek === 'Monday') {
    console.log("I monday!")
} else if (dayOfWeek === 'saturday') {
    console.log("I saturday!");
} else if (dayOfWeek === 'friday') {
    console.log("friday me");
}

let age = Math.floor(prompt("enter age: "));

if (age <= 5) {
    console.log("free for you")
} else if (age <= 10) {
    console.log("$10 for you");
} else if (age <= 65) {
    console.log("$20 for you");
} else if (age < 100) {
    console.log("$10 for you");
} else {
    console.log("how are you alive?");
}

const password = prompt("Please enter a new password.");

if (password.length <= 6) {
    console.log("password must be greater than 6 characters.")
} else {

    if (password.indexOf(' ') === -1) {
        console.log("Ok")
    } else {
        console.log("password must not contain space bro")
    }
}
