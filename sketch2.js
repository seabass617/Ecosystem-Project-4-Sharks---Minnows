//====================================================================================
//  Main Sketch File
//====================================================================================

//Declare global variables
let minnows = new Array(100);
let sharkminnowsystem;
let food;
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
	
	// Background Color
	background(248,189,127);
  
  //New Shark Minnow System 

  sharkminnowsystem = new SystemSharkMinnow();

  // Create a new shark minnow system, parameters, number of minnows, number of sharks
  // When a shark minnow system is created we want to make populate the array with minnows, and one shark



}

//===================================================================================
// Main Draw Function: Repeated Every Frame
//===================================================================================
function draw() {
	//Redraw Background Color (Necessary?)
	background(248,189,127);

  sharkminnowsystem.run();
  //When we run, the minnows should move, react, and same with the shark 


}

