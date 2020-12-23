class SystemSharkMinnow {
  // is made up of fish
  // those fish can be sharks or minnows

  constructor(){
    this.minnows = new Array;
    this.sharks = new Array;
    this.repeller = new Repeller;
    this.populate();
    this.fishes = this.minnows.concat(this.sharks);
  }

  populate(){
    for ( let i = 0; i < 300; i++ ){
      this.minnows.push(new Minnow(120,180,173));
    }

    this.sharks.push(new Shark(62,78,80));
  }

  run(){
    this.applyRepeller(this.sharks[0]);
    //this.repeller.display();
    this.fishes.forEach( fish => fish.run() );
    //this.applyRepeller(this.repeller);
  }

  applyRepeller(shark){
    // this.minnows.forEach( minnow => {
    //   let force = repeller.repel(minnow);
    //   if (force.mag() != 0){
    //     minnow.applyForce(force);
    //   }
    // })
     
    this.minnows.forEach( minnow => {
      let force = shark.scare(minnow);
      if (force.mag() != 0){
        minnow.applyForce(force);
        minnow.isScared();
      } else {
        minnow.notScared();
      }
    })
  }

}