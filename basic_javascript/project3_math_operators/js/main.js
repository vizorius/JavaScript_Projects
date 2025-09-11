// Function that performs an addition and displays the result in the paragraph with id "Math"
function addNumbers() {
    var sum = 5 + 7; // Example addition
    document.getElementById("Math1").innerHTML = "5 + 7 = " + sum;
}
// Function that performs a subtraction and displays the result in the paragraph with id "Math2"
function subtractNumbers() {
    var difference = 10 - 3; // Example subtraction
    document.getElementById("Math2").innerHTML = "10 - 3 = " + difference;
}
// Function that performs a multiplication and displays the result in the paragraph with id "Math3"
function multiplyNumbers() {
    var product = 4 * 6; // Example multiplication
    document.getElementById("Math3").innerHTML = "4 × 6 = " + product;
}
// Function that performs a division and displays the result in the paragraph with id "Math4"
function divideNumbers() {
    var quotient = 20 / 5; // Example division
    document.getElementById("Math4").innerHTML = "20 ÷ 5 = " + quotient;
}
// Function that performs multiple operations and displays the result in the paragraph with id "Math5"
function multipleOperations() {
    // Example: (5 + 3) * 2 - 4 / 2
    var result = (5 + 3) * 2 - 4 / 2;
    document.getElementById("Math5").innerHTML = "(5 + 3) × 2 - 4 ÷ 2 = " + result;
}
// Function that performs a modulus operation and displays the result in the paragraph with id "Math6"
function modulusNumbers() {
    var remainder = 17 % 5; // Example modulus
    document.getElementById("Math6").innerHTML = "17 % 5 = " + remainder;
}
// Function that demonstrates the unary negation operator and displays the result in the paragraph with id "Math7"
function unaryOperator() {
    var number = 8;
    var negated = -number; // Unary negation
    document.getElementById("Math7").innerHTML = "Unary negation of 8 is " + negated;
}
// Function that demonstrates the increment operator and displays the result in the paragraph with id "Math8"
function incrementOperator() {
    var number = 10;
    number++;
    document.getElementById("Math8").innerHTML = "Increment 10 gives " + number;
}
// Function that demonstrates the decrement operator and displays the result in the paragraph with id "Math9"
function decrementOperator() {
    var number = 10;
    number--;
    document.getElementById("Math9").innerHTML = "Decrement 10 gives " + number;
}
// Function that generates a random number between 0 and 1 and displays the result in the paragraph with id "Math10"
function randomNumber() {
    var rand = Math.random();
    document.getElementById("Math10").innerHTML = "Random number (0-1): " + rand;
}
// Function that demonstrates the use of the Math object and Math.sqrt method
function mathSqrt() {
    var number = 49;
    var result = Math.sqrt(number); // Using Math object method
    document.getElementById("Math11").innerHTML = "The square root of 49 is " + result;
}



