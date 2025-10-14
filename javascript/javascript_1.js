function Hello_World_Function() {
	var A = document.getElementsByClassName("Click");
	A[0].innerHTML = "The text has changed!";
}

// Draw the circle and gradient rectangle when the DOM is fully loaded
window.onload = function() {
	var c = document.getElementById("myCanvas");
	if (c && c.getContext) {
		var ctx = c.getContext("2d");

		// Draw gradient rectangle (left to right: black to white)
		var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
		gradient.addColorStop(0, "black");
		gradient.addColorStop(1, "white");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, c.width, c.height);
	}
};
