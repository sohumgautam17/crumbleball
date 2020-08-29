class Dustbin{
constructor(x, y, width, height){
    var options = {
        isStatic: true
    }


        this.x = x;
        this.y = y;
		this.width=width;
		this.height=height;
		this.angle=0;	
        
        this.body = Bodies.rectangle(x,y, this.width, this.height, options);


World.add(world, this.body);

}
display(){
    var pos =this.body.position;
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);
  }
};

