// This code demonstrates the use of a global variable X, which is accessible in both functions.
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

// This code demonstrates the use of a local variable X, which is only accessible within the function it is defined in.
function Add_numbers_local_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_local_2() {
    var X = 10;
    document.write(X + 100 + "<br>");
}
Add_numbers_local_1();
Add_numbers_local_2();

// This code demonstrates the use of a local variable X, which is only accessible within the function it is defined in. It also shows how to log output to the console.
function Add_numbers_console_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_console_2() {
    var X = 10;
    console.log(X + 100);
}
Add_numbers_console_1();
Add_numbers_console_2();

// Function with an intentional error and console.log for debugging
function errorFunction() {
    let num1 = 5;
    let num2 = 10;
    // Typo in variable name (num3 instead of num2)
    let sum = num1 + num3;
    console.log("Sum is:", sum); // This will cause a ReferenceError
}
errorFunction(); // Check the console in Chrome Dev Tools for the error

function displayTime() {
    // Get the current hour
    var currentHour = new Date().getHours();
    document.getElementById("Hour").innerHTML = currentHour;
}

// This function updates the content of an HTML element with id "Greeting" based on the current time.
function get_Date() {
    var currentHour = new Date().getHours();
    if (currentHour < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("Greeting").innerHTML = "Good evening!";
    }
}

// This function updates the content of an HTML element with id "Time_of_day" based on the current time.
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time > 0 && Time < 12) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
