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
let img;

function preload(){
  rightpenguino = loadAnimation("assets/rightpenguino0001.png", "assets/rightpenguino0003.png")
  leftpenguino = loadAnimation("assets/leftpenguino0001.png", "assets/leftpenguino0003.png")
  turnegg = loadAnimation("assets/egg0001.png", "assets/egg0004.png")
  img = loadImage("assets/icebackground.jpg")
  anim = [rightpenguino, leftpenguino]
}

function setup(){
  createCanvas(800, 800);
  player = new Player(400,400,50,50,0,0)
  rectMode(CENTER);




  }



function draw(){
	image(img, 0,0)
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
      collisionCheck(player, eggsy[k])
}
}

}

function collisionCheck(obj1, obj2){
  if(Math.abs(obj1.x - obj2.x) - obj1.w/2 - obj2.w/2 < 0){
    if(Math.abs(obj1.y - obj2.y) - obj1.h/2 - obj2.h/2 < 0){
      obj2.x = 5000
      obj2.y = 5000

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
  constructor(x,y,w,h,xspeed,yspeed){
    this.w = w;
    this.h = h;
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
    constructor(x,y,w,h){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    }

    draweggs(){
      animation(turnegg, this.x, this.y)
    }




  }
