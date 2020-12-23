//====================================================================================
//  Main Sketch File
//====================================================================================

//Declare global variables
//let minnows = new Array(100);
let sharkminnowsystem;
//let food;
let clientWidth, clientHeight;
//let foodSlider; 

//===================================================================================
// Responsiveness
//===================================================================================
function windowResized() {
	console.log("resized");
	clientHeight = document.getElementById('window').clientHeight;
	clientWidth = document.getElementById('window').clientWidth;
	resizeCanvas(clientWidth, clientHeight);
}

//===================================================================================
// Main Setup Function: Initialize Variables
//===================================================================================
function setup() {
	
	// Window Detection
	clientHeight = document.getElementById('window').clientHeight;
	clientWidth = document.getElementById('window').clientWidth;
	
	// Creating Canvas
	canvas = createCanvas (clientWidth, clientHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-10');
	
	// Creating Slider
	//foodSlider = createSlider(2,10,.1);
	//foodSlider.position(20,125);
	
	// Background Color
	background(248,189,127);

	// Creating an instance of the Fish object
	//goldFish = new Fish();

	sharkminnowsystem = new SystemSharkMinnow();

	// for (let i = 0; i < minnows.length; i++) {
	// 	minnows[i] = new Minnow(120,180,173);
	// }

}

//===================================================================================
// Main Draw Function: Repeated Every Frame
//===================================================================================
function draw() {
	//Redraw Background Color (Necessary?)
	background(248,189,127);

	sharkminnowsystem.run();
	
	// for (let i = 0; i < minnows.length; i++){ 
	// 	// If there is food on the screen, apply attractive force and display food
	// 	if (food) {
	// 		let f = food.calculateAttraction(minnows[i]); 
	// 		minnows[i].applyForce(f); 
	// 		food.display(); 
	// 	} else {
	// 		minnows[i].meander();
	// 	}

	// 	// Update the properties of the fish (acceleration, velocity, location) etc
	// 	// And display the fish
	// 	minnows[i].update(); 
	// 	minnows[i].checkEdges();
	// 	minnows[i].display();
	// }

	// // Text for slider	
	// //fill(255);
	// //textSize(16);
	// //text('Food Size', 20, 120);
	// //fill(255);
}

//===================================================================================
// Mouse Click Function
//===================================================================================
// function mouseClicked(){
	// Create food item at mouse click 
	// food = new MinnowFood(mouseX, mouseY);
// }


