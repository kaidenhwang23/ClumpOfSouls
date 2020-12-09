//python -m SimpleHTTPServer 8000

let player;
var penguino;
let start = false;

function preload(){
  penguino = loadAnimation("assets/penguino0001.png", "assets/penguino0003")
}

function setup(){
  createCanvas(800, 800);
  player = new Player(400,400,25,0,0)
  rectMode(CENTER);

}

function draw(){
	background(220);
  if(start == false){
    fill("green")
    rect(400,400,350,100)
    stroke("black")
    fill("black")
    textSize(30)
    text("press space to start", 275,405)
  }else{
    null
  }


  if(start == true){
    player.drawPlayer();
    player.boundaries();
}
}


function keyPressed(){
  if(start == true){
    if(keyCode == UP_ARROW){
      player.yspeed = -3
      player.xspeed = 0
    }
    if(keyCode == DOWN_ARROW){
      player.yspeed = 3
      player.xspeed = 0
    }
    if(keyCode == RIGHT_ARROW){
      player.xspeed = 3
      player.yspeed = 0
    }
    if(keyCode == LEFT_ARROW){
      player.xspeed = -3
      player.yspeed = 0
    }
  }
  if(keyCode == 32){
    start = true
  }
}





class Player {
  constructor(x,y,size,xspeed,yspeed){
    this.size = size
    this.xspeed = xspeed
    this.yspeed = yspeed
    this.x = x
    this.y = y
  }

  drawPlayer(){
    animation(penguino, x, y);
  }

  boundaries(){
    if(this.x > 810){
      this.x = -10
    }
    if(this.x < -10){
      this.x = 810
    }
    if(this.y < -10){
      this.y = 810
    }
    if(this.y > 810){
      this.y = -10
    }
  }
}

  class Food {
    constructor(x,y,size){
      this.x = x
      this.y = y
      this.size = size
    }

    drawFood(){

    }
  }
