// Type checking examples
document.writeln(typeof "word" + "<br>"); // string
document.writeln(typeof 3 + "<br>"); // number
document.writeln(typeof "10" + 5 + "<br>"); // string concatenation

// Type coercion and arithmetic operations
document.writeln("10" + 5 + "<br>"); // string + number = string
document.writeln("10" - 5 + "<br>"); // string - number = number
document.writeln("10" * 5 + "<br>"); // string * number = number
document.writeln("10" / 5 + "<br>"); // string / number = number

// Infinity and -Infinity
document.writeln(2E310  + "<br>"); // Infinity
document.writeln(-3E310 + "<br>"); // -Infinity

// Comparison operators
document.writeln(10 > 2); // true
document.writeln("<br>");
document.writeln(10 < 2); // false
document.writeln("<br>");

// Console log examples
console.log(2 + 2); // 4
console.log(10 < 2); // false
console.log("fun" + "ction"); // "function"

// Equality operators
document.writeln(10 == 10); // true
document.writeln("<br>");
document.writeln(3 == 11); // false
document.writeln("<br>");

// Strict equality operators
document.writeln(3 === 3); // true
document.writeln("<br>");
document.writeln(3 === "3"); // false
document.writeln("<br>");
document.writeln(4 === 3); // false
document.writeln("<br>");
document.writeln("cat" === "cats"); // false
document.writeln("<br>");

// Logical AND and OR operators
document.writeln(5 > 2 && 10 > 4); // true
document.writeln("<br>");
document.writeln(5 > 10 && 10 > 4); // false
document.writeln("<br>");
document.writeln(5 > 10 || 10 > 4); // true
document.writeln("<br>");
document.writeln(5 > 10 || 10 > 20); // false
document.writeln("<br>");

// NOT operator example in a function
function notFunction() {
    // Outputs the negation of (20 > 10), which is false
    document.getElementById("Not").innerHTML = !(20 > 10);
}