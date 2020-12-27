class Minnow extends Fish {
	
	constructor(r,g,b){
    super(r,g,b);
    this.topspeed = 2;
  }

  //===================================================================================
  // Scare Functions: Will change color and speed of scared minnows
  //===================================================================================
  isScared(showscare){
    // Conditional to allow for toggling of changing color or not
    if (showscare){
      this.changeColor(255,255,255);
    }
    this.topspeed = 5;
  }

  notScared(){
    this.changeColor(120,180,173);
    this.topspeed = 2;
  }
  
  //===================================================================================
  // Scare Functions: Will change color and speed of scared minnows
  //===================================================================================
  run(){
    super.run();
  }


}