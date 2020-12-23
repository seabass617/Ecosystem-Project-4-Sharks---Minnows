class Shark extends Fish {
	
	constructor(r,g,b){
    super(r,g,b);
    this.fishRadius = 30; 
    this.mass = 5;
    this.tail = new Tail(this.fishRadius);
    this.topspeed = 3;
    this.scareRadius = 200;
	}

  scare(minnow) {
    let scaleFactor = 300
    let force = p5.Vector.sub(this.location, minnow.location);
    let distance = force.mag();
    minnow.topspeed = this.mass;
    minnow.topspeed = constrain(minnow.topspeed,1,10);
    force.normalize(); 
    let strength = (-scaleFactor/ distance);
    
    // Stop when we get to the food
    if (distance <= this.scareRadius) {
       force.mult(strength);
       minnow.changeColor(255,255,255);
    } else {
       force.mult(0);
    }
     // Return the force as a vector
    return force;
  }
  // //===================================================================================
  // // Update Function: All fish calculations will be processed here once per frame
  // //===================================================================================
	// update(){
	// }

  // //===================================================================================
  // // Display Function: Used to display different components of the fish
  // //===================================================================================
  display(){
    super.display();
    noFill();
    stroke(255,255,255);
    ellipse(this.location.x, this.location.y, this.scareRadius *2, this.scareRadius *2);
  }
  
  // //===================================================================================
  // // ApplyForce Method: Applies a force to the fish 
  // //===================================================================================
  // applyForce(force) {
  // }

  // //===================================================================================
  // // Meander Method: Fish will randomly move around the screen 
  // //===================================================================================
  // meander(){
  // }
  // //===================================================================================
  // // CheckEdges Method: Allows for the fish to wrap around edges of the viewport
  // //===================================================================================
	// checkEdges(){
  // }

}