//python -m SimpleHTTPServer 8000

let player;
let start = false;
var rightpenguino;
var leftpenguino;

function preload(){
  rightpenguino = loadAnimation("assets/rightpenguino0001.png", "assets/rightpenguino0003.png")
  leftpenguino = loadAnimation("assets/leftpenguino0001.png", "assets/leftpenguino0003.png")
}

function setup(){
  createCanvas(800, 800);
  player = new Player(400,400,0.1,0,0)
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
      rightpenguino.playing = true
      rightpenguino.visible = true
      leftpenguino.playing = false
      leftpenguino.visible = false

    }
    if(keyCode == DOWN_ARROW){
      player.yspeed = 3
      player.xspeed = 0
      rightpenguino.playing = false
      rightpenguino.visible = false
      leftpenguino.playing = true
      leftpenguino.visible = true
    }
    if(keyCode == RIGHT_ARROW){
      player.xspeed = 3
      player.yspeed = 0
      rightpenguino.playing = true
      rightpenguino.visible = true
      leftpenguino.playing = false
      leftpenguino.visible = false
    }
    if(keyCode == LEFT_ARROW){
      player.xspeed = -3
      player.yspeed = 0
      rightpenguino.playing = false
      rightpenguino.visible = false
      leftpenguino.playing = true
      leftpenguino.visible = true
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
    scale(this.size,this.size)
    rightpenguino.playing = false
    rightpenguino.visible = false
    animation(leftpenguino, this.x+=this.xspeed, this.y+=this.yspeed)
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
