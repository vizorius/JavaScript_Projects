// Function to check if user is tall enough to ride using a ternary operator
function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value; // Get user input
	// Use ternary operator to determine message
	Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
	// Display result in the page
	document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Function to check if user is old enough to vote using a ternary operator
function Vote_Function() {
	var Age, Can_vote;
	Age = document.getElementById("Age").value; // Get user input
	// Use ternary operator to determine message
	Can_vote = (Age < 18) ? "You are not old enough to vote." : "You can vote!";
	// Display result in the page
	document.getElementById("Vote").innerHTML = Can_vote;
}

// Constructor function for Vehicle objects
function Vehicle(Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}

// Create Vehicle objects using the constructor
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display Erik's vehicle information
function myFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML =
		"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
		" manufactured in " + Erik.Vehicle_Year;
}

// Function to display Emily's vehicle information
function New_and_This() {
	document.getElementById("New_and_This").innerHTML =
		"Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
		" manufactured in " + Emily.Vehicle_Year;
}
// Example of a nested function: demonstrates a function defined inside another function
function Nested_Function() {
	function outer() {
		var start = 5; // Outer function variable
		function inner() {
			return start + 3; // Inner function uses outer variable
		}
		return inner(); // Call inner function
	}
	// Display result in the page
	document.getElementById("Nested_Function").innerHTML = "Result of nested function: " + outer();
}