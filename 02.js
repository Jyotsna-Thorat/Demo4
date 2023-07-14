let obj = {
    harry: 90,
    jack: 80,
    peter: 70

}

for (let i in obj) {

    console.log("marks of " + i + " is : " + obj[i]);

}
let cn = 6;
let i = 1;
do {
    console.log("try again");
    i++;
} while (cn != i);



let sentence = "hello welcome";
console.log(sentence.includes("hello1"));

let arr = [1, 2, 3, 4, 5];
console.log(arr);
let arr2 = arr.toString();
console.log(arr2);

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);

}