
/* function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
}
let x = myFunction(4, 3);   // Function is called, return value will end up in x
console.log(x); */


var carName = "BMW"
function myFunction() {
    var carName = "Volvo";
    console.log(carName);
}

function myFunction2() {
    var carName = "Volvo";
    console.log(carName);
}
myFunction()
myFunction2()
console.log(carName);

