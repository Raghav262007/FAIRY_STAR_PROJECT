var starImg, fairyImg, bgImg;
var fairy, fairyVoice;
var star, starBody;
var starBody_object;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  starImg = loadImage("star.png");
  fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
  bgImg = loadImage("starNight.png");
  fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  // fairyVoice.play();

  fairy = createSprite(130, 520);
  fairy.addAnimation("fairyflying", fairyImg);
  fairy.scale = 0.25;

  star = createSprite(650, 30);
  star.addImage(starImg);
  star.scale = 0.2;

  engine = Engine.create();
  world = engine.world;

  starBody_object = {
    restitution: 0.5,
    isStatic: true,
  };
  starBody = Bodies.circle(650, 30, 5, starBody_object);
  World.add(world, starBody);

  star.x = starBody.position.x;
  star.y = starBody.position.y;
  Engine.run(engine);
}

function draw() {
  background(bgImg);

  if (star.y > 470) {
    star.velocityY = 0;
  }
  keyPressed();
  drawSprites();
}

function keyPressed() {
  //write code here
  if (keyDown(LEFT_ARROW)) {
    fairy.x -= 10;
  } else if (keyDown(RIGHT_ARROW)) {
    fairy.x += 10;
  } else if (keyDown(DOWN_ARROW)) {
    star.velocityY = 2;
  }
}
