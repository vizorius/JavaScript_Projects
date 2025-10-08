function call_Loop() {
	var Digit = "" ;
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Loop").innerHTML = Digit;
}
// For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"] ;
var Content = "" ;
var Y;
function for_Loop () {
	for (Y = 0; Y < Instruments.length; Y++) {
		Content += Instruments[Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Arrays and Objects
function array_Function() {
var Cat_Picture = [];
Cat_Picture [0] = "sleeping";
Cat_Picture [1] = "playing";
Cat_Picture [2] = "eating";
Cat_Picture [3] = "purring";
document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

// Constant Function
function constant_function() {
const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
Musical_Instrument.color = "blue";
Musical_Instrument.price = "$900";
document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
// Let Keyword
function let_function() {
	let X = 82;
	{
		let X = 33;
		document.getElementById("Let").innerHTML = X;
	}
	// Use the outer X to avoid "never read" warning
	console.log(X);
}
// Return Statement
function multiply(a, b) {
	return a * b;
}
function return_function() {
	document.getElementById("Return").innerHTML = multiply(4, 7);
}
// Object with Method
let car = {
	make: "Dodge ",
	model: "Viper ",
	year: "2021 ",
	color: "red ",
	description : function() {
		return "The car is a " + this.year + this.color + this.make + this.model;
	}
};
function object_function() {
	document.getElementById("Object").innerHTML = car.description();
}

// Break Statement
function break_function() {
	let text = "";
	for (let i = 0; i < 10; i++) {
		if (i === 5) { break; }
		text += "The number is " + i + "<br>";
	}
	document.getElementById("Break").innerHTML = text;
}

// Continue Statement
let text2 = "";
for (let i = 0; i < 10; i++) {
	if (i === 3) { continue; }
	text2 += "The number is " + i + "<br>";
}
function continue_function() {
	document.getElementById("Continue").innerHTML = text2;
}
