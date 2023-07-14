//random number
let randomNumber;
let guess;
do {
    randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);
    guess = prompt("guess the number");

    if (guess == randomNumber) {
        console.log("guess is correct");
    } else if (guess > randomNumber) {
        console.log("guess is greater than random number");
    } else {
        console.log("guess is smaller than random number");
    }

} while (guess != randomNumber);
// const randomNumber = Math.floor(Math.random() * 101);
// console.log(randomNumber);

// let guess = prompt("guess the number");

// if (guess == randomNumber) {
//     console.log("guess is correct");
// } else if (guess > randomNumber) {
//     console.log("guess is greater than random number");
// } else {
//     console.log("guess is smaller than random number");
// }