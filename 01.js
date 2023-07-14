let a1 = "abc";
let a = 10;
console.log("hi");
console.log(typeof a1);
console.log("output is " + (a1 + 20));


const datainfo = {
    name: "abc",
    number: 123
}

console.log(datainfo);

// datainfo = 456;

datainfo["address"] = "pune";
console.log(datainfo);

//switch statment

let day = "sunday";

switch (day) {
    case "sunday":
        {
            console.log("Holiday");
            break;
        }
    case "monday":
        {
            console.log("working")
        }
    default:
        break;
}



const hello = () => {
    return "hello";
}

console.log(hello());

function print_current_page() {
    window.print();
}