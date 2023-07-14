// let a = [1, 2, 3, 4, 5];

// a.forEach(element => {
//     console.log(element + element);
// });
// console.log("********************");
// for (const i in a) {
//     console.log(i);
// }


let b = [11, 13, 21, 56];

let c = b.map((value, index) => {
    console.log(value, index);
})

console.log(c);

function print_current_page() {
    window.print();
}