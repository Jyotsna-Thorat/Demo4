//Write a JavaScript code to accept 10 numbers and check how many are +ive,  -ive, and zero.


let negative = 0;
let positive = 0;
let zeroNumber = 0;
for (let i = 1; i <= 10; i++) {
    let number = Number(prompt(`Enter number ${i}:`));

    if (number > 0) {
        positive++;
    } else if (number < 0) {
        negative++;
    } else {
        zeroNumber++;
    }
}



console.log("positive nos are : " + positive);
console.log("negative nos are : " + negative);
console.log("negative nos are : " + zeroNumber);