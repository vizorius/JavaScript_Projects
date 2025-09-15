function my_Dictionary() {
	var Animal = {
		Species: "Dog",
		Color: "Black",
		Breed: "Labrador",
		Age: 5,
		Sound: "Bark!"
	};
    delete Animal.Sound; // Deleting the Sound property from the Animal dictionary
	document.getElementById("Dictionary").innerHTML = "His favorite sound is: " + Animal.Sound;
}