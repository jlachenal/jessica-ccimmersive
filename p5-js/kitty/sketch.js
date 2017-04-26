
function setup() {

	createCanvas(320, 240);
	background(220);

}

function draw() {
	// face
	ellipse(160, 120, 85, 110);

	fill(51);

	arc(145, 110, 10, 10, radians(160), radians(110));
	arc(175, 110, 10, 10, radians(160), radians(110));

	noFill();

	arc(152, 140, 15, 15, TWO_PI, PI);
	arc(167, 140, 15, 15, TWO_PI, PI);

	fill('#fae');
	triangle(155, 125, 165, 125, 160, 130);

	noFill();



}
