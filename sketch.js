let player;

function setup(){
  createCanvas(800, 800);
  let player = new Player(20,20,50,50)

}

function draw(){
	background(220);
  player.drawPlayer();
}


function keyPressed(){
  if(keyCode == UP_ARROW){
    this.ydirection * -1
    this.xdirection = 0
  }
  if(keyCode == DOWN_ARROW){
    this.ydirection * 1
    this.xdirection = 0
  }
  if(keyCode == RIGHT_ARROW){
    this.xdirection * 1
    this.ydirection = 0
  }
  if(keyCode == LEFT_ARROW){
    this.xdirection * -1
    this.ydirection = 0
  }
}


class Player {
  constructer(x,y,width,height){
    this.width = width
    this.height = height
    this.xdirection = 10
    this.ydirection = 10
    this.x = x
    this.y = y
  }

  drawPlayer(){
    fill("black")
    ellipse(this.x, this.y, this.width, this.height)
    console.log(this.x, this.y)
  }
}
