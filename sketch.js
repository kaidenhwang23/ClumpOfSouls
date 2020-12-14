//python -m SimpleHTTPServer 8000

let player;
let start = false;
let anim = [];
let i = 0
var rightpenguino;
var leftpenguino;
var turnegg;
let egg;
let eggsy = [];

function preload(){
  rightpenguino = loadAnimation("assets/rightpenguino0001.png", "assets/rightpenguino0003.png")
  leftpenguino = loadAnimation("assets/leftpenguino0001.png", "assets/leftpenguino0003.png")
  turnegg = loadAnimation("assets/egg0001.png", "assets/egg0004.png")
  anim = [rightpenguino, leftpenguino]
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
    player.collisionCheck();
    for(k = 0; k < 30; k++){
      egg = new Egg(random(10,width-10), random(10,height-10), 20, 22)
      eggsy.push(egg)
      eggsy[k].draweggs();
    }
    for(b = 0; b < eggsy.length; b++){
      eggsy.collide(player,begone(eggsy[k]))
    }
    function begone(egg){
      remove(egg)
    }

}

}


function keyPressed(){
  if(start == true){
    if(keyCode == UP_ARROW){
      player.yspeed = -3
      player.xspeed = 0
      i = 0
      rightpenguino.playing = true
      rightpenguino.visible = true
      leftpenguino.playing = false
      leftpenguino.visible = false

    }
    if(keyCode == DOWN_ARROW){
      player.yspeed = 3
      player.xspeed = 0
      i = 1
      rightpenguino.playing = false
      rightpenguino.visible = false
      leftpenguino.playing = true
      leftpenguino.visible = true
    }
    if(keyCode == RIGHT_ARROW){
      player.xspeed = 3
      player.yspeed = 0
      i = 0
      rightpenguino.playing = true
      rightpenguino.visible = true
      leftpenguino.playing = false
      leftpenguino.visible = false
    }
    if(keyCode == LEFT_ARROW){
      player.xspeed = -3
      player.yspeed = 0
      i = 1
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
    this.animation = anim
  }

  drawPlayer(){
    animation(anim[i], this.x+=this.xspeed, this.y+=this.yspeed)
  }

  boundaries(){
    if(this.x > 820){
      this.x = -10
    }
    if(this.x < -20){
      this.x = 810
    }
    if(this.y < -20){
      this.y = 810
    }
    if(this.y > 820){
      this.y = -10
    }
  }

  collisionCheck(){

  }
}

  class Egg {
    constructor(x,y,width,height){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }

    draweggs(){
      animation(turnegg, this.x, this.y)
    }




  }
