
function setup() {

	createCanvas(320, 240);
	background(220);

}

function draw() {

	fill(220);
	arc(217, 119, 30, 60, radians(195), radians(255));

	// ears (+ hair trim)
	fill(255);
	ellipse(115, 115, 10, 20);
	ellipse(205, 115, 10, 20);

	// face
	fill(255);
	ellipse(160, 120, 85, 110);

	// nose
	fill(51);
	ellipse(160, 130, 5, 5);

	// eyes
	arc(145, 115, 10, 10, radians(160), radians(110));
	arc(175, 115, 10, 10, radians(160), radians(110));

	// hair
	fill(51);
	arc(153, 90, 80, 60, radians(155), radians(380));
	arc(170, 92, 80, 70, radians(190), radians(35));

	noFill();

	// mouth
	arc(160, 145, 25, 15, TWO_PI, PI);

}
