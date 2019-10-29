 

	var left1, left2, left3;
	var eyes1, eyes2, eyes3, eyes4, eyes5;
    var head1, head2, head3, head4;
    var nose1, nose2, nose3, nose4;
    var mouth1, mouth2, mouth3, mouth4;
    var right1, right2, right3;
	var show = 0;
	var leftChoice, eyesChoice, mouthChoice, rightChoice, noseChoice, headChoice;
	
	function preload() {
	nose1 = loadImage("nose/1.jpg");
	nose2 = loadImage("nose/2.jpg");
	nose3 = loadImage("nose/3.jpg");
	nose4 = loadImage("nose/4.jpg");
	
	eyes1 = loadImage("eyes/1.png");
	eyes2 = loadImage("eyes/2.png");
	eyes3 = loadImage("eyes/3.jpg");
    eyes4 = loadImage("eyes/4.jpg");
    eyes5 = loadImage("eyes/5.jpg");

    head1 = loadImage("head/1.jpg");
    head2 = loadImage("head/2.jpg");
    head3 = loadImage("head/3.jpeg");
    head4 = loadImage("head/4.jpg");

    mouth1 = loadImage("mouth/1.jpg");
    mouth2 = loadImage("mouth/2.jpg");
    mouth3 = loadImage("mouth/3.jpg");
    mouth4 = loadImage("mouth/4.jpg");

    left1 = loadImage("left/1.png");
    left2 = loadImage("left/2.jpg");
    left3 = loadImage("left/3.jpg");

    right1 = loadImage("right/1.jpg");
    right2 = loadImage("right/2.jpg");
    right3 = loadImage("right/3.jpg"); 
	}
	
	function setup() {
	createCanvas(800, 600);

	textSize(32);
text('Click click', 10, 30);
fill(0, 102, 153);
	
	}
	
	function draw() {
	
	
	if (show == 1) {
		creature(mouthChoice, leftChoice, headChoice, eyesChoice, noseChoice, rightChoice);

	}
	
	}
	
	function mouseReleased() {
	headChoice = int(random(4));
	eyesChoice = int(random(5));
	leftChoice = int(random(3));
	noseChoice = int(random(4));
	rightChoice = int(random(3));
	mouthChoice = int(random(4));
	show = 1;
	}
	
	function creature(mouth, left, head, eyes, nose, right) {
	
	
	
	
	if (head == 0) {
	image(head1, (width / 2.8), 175, (height / 3), 100);
	}
	
	if (head == 1) {
	image(head2, (width / 2.8), 175, (height / 3), 100);
	}
	
	if (head == 2) {
	image(head3, (width / 2.8), 175, (height / 3), 100);
	}

	if (head == 3) {
	image(head4, (width / 2.8), 175, (height / 3), 100);
	}
	

	if (right == 0) {
		image(right1, (width / 1.8), 280, (height / 6), 100);
		}
		
		if (right == 1) {
		image(right2, (width / 1.8), 280, (height / 6), 100);
		}
		
		if (right == 2) {
		image(right3, (width / 1.8), 280, (height / 6), 100);
		}

		if (left == 0) {
			image(left1, (width / 1), 280, (height / 6), 100);
			}
			
			if (left == 1) {
			image(left2, (width / 1), 280, (height / 6), 100);
			}
			
			if (left == 2) {
			image(left3, (width / 1), 280, (height / 6), 100);
			}

	if (eyes == 0) {
	image(eyes1, (width / 2.5),  250, (height / 4),  100);
	}
	
	if (eyes == 1) {
	image(eyes2, (width / 2.5), 250, (height / 4), 100);
	}
	
	if (eyes == 2) {
	image(eyes3, (width / 2.5), 250, (height / 4), 100);
	}
	
	if (eyes == 3) {
	image(eyes4, (width / 2.5), 250, (height / 4), 100);
	}
    
    if (eyes == 4) {
     image(eyes5, (width / 2.5), 250, (height / 4), 100);
    }
	


	if (nose == 0) {
		image(nose1, (width / 2.8), 325, (height / 3), 150);
		}
		
		if (nose == 1) {
		image(nose2, (width / 2.8), 325, (height / 3), 150);
		}
		
		if (nose == 2) {
		image(nose3, (width / 2.8), 325, (height / 3), 150);
		}
	
		if (nose == 3) {
		image(nose4, (width / 2.8), 325, (height / 3), 150);
		}

		if (mouth == 0) {
			image(mouth1, (width / 2.8), 450, (height / 3),100 );
			}
			
			if (mouth == 1) {
			image(mouth2, (width / 2.8), 450, (height / 3), 100);
			}
			
			if (mouth == 2) {
			image(mouth3, (width / 2.8), 450, (height / 3), 100);
			}
		
			if (mouth == 3) {
			image(mouth4, (width / 2.8), 450, (height / 3), 100);
			}
			
			
			
			
			
	}
