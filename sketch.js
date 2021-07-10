var back,back2,backImg;
var BADSImg;
var BANSImg;
var Bbomb,VHbullet,Hbullet,bullet1_Img,bullet2_Img,bullet3_Img;
var homeBG_Img;
var play,playImg;
var shop,shopImg,shopBG_Img;
var gameState = "settings";
var bulletsR = 10;
var tBullets = 10;
var stage_B1,stage_B2;
var shop_B;
var BM1,BM2,BM3,BM4,buy,click,shoot,touch;
var s1,s2,s3,s4,s5,s6,s7,s8;
var coins = 100;
var current = 1;
var health = 100;
var vhealth = 100;
var life = 3;
var fail,failImg;
var completed,completedImg;
var divider;
var story,storyImg;
var heart,heartImg;
var info,infoImg;
var insta,instaImg;
var tele,teleImg;
const YES = 1;
const NO = 0;
var changeLife = YES;
var dummyheli;
var missionAccomplished,missionAccomplishedImg;
var replay,replayImg;
var BL1, BL2, BL3, BL4;
var NEC, NECImg;
var NEL, NELImg;
var shopNow1, shopNow2, shopNow3, shopNow4, ShopNowImg;
var gear,gearimg;
var disc1,disc2,disc3,disc4,discImg;
var rotateAngle = 90;
var mute,muteImg;
var music,musicImg;

var hBar;
var hBar1;
var hBar1Width;
var vhBar;
var vhBar1;
var vhBar1Width;

var stage1WP = 200;
var stage2WP = 200;
var stage3WP = 300;
var stage4WP = 200;
var stage5WP = 300;
var stage6WP = 300;
var stage7WP = 400;
var stage8WP = 750;

var helicopter,helicopterAnimation;
var vHelicopter,vHelicopterAnimation;
var FH,FHImg;
var FVH,FVHImg;
var BS,BSImg;

function preload() {
  shopBG_Img = loadImage("images/shopBG.jpeg");
  backImg = loadImage("images/back.png");
  BADSImg = loadImage("images/BADS.jpeg");
  BANSImg = loadImage("images/BANS.jpeg");
  bullet1_Img = loadImage("images/bullet_1.png");
  bullet2_Img = loadImage("images/bullet_2.png");
  homeBG_Img = loadImage("images/homeBG.jpeg");
  playImg = loadImage("images/play.png");
  shopImg = loadImage("images/shop.png");
  BSImg = loadImage("images/BS.png");
  failImg = loadImage("images/fail.png");
  completedImg = loadImage("images/completed.png");
  bullet3_Img = loadImage("images/bullet_3.png");
  storyImg = loadImage("images/story.png");
  heartImg = loadImage("images/heart.png");
  infoImg = loadImage("images/info.png");
  instaImg = loadImage("images/insta.png");
  teleImg = loadImage("images/telegram.png");
  missionAccomplishedImg = loadImage("images/MissionAccomplished.png");
  replayImg = loadImage("images/replay.png");
  NECImg = loadImage("images/noCoins.png")
  NELImg = loadImage("images/noLife.png");
  shopNowImg = loadImage("images/buy.png");
  gearImg = loadImage("images/gear.png");
  discImg = loadImage("images/disc.png");
  muteImg = loadImage("images/mute.png");
  musicImg = loadImage("images/music.png");
  dummyheli = loadAnimation("images/h1.png","images/h2.png","images/h3.png","images/h4.png");
  helicopterAnimation = loadAnimation("images/h1.png","images/h2.png","images/h3.png","images/h4.png");
  vHelicopterAnimation = loadAnimation("images/vh1.png","images/vh2.png","images/vh3.png","images/vh4.png");

  BM1 = loadSound("audio/BM.mp4");
  BM2 = loadSound("audio/Dance Monkey.m4a");
  BM3 = loadSound("audio/Montero.m4a");
  BM4 = loadSound("audio/Havana.m4a");
  buy = loadSound("audio/buy.mp4");
  click = loadSound("audio/click.mpeg");
  shoot = loadSound("audio/shoot.mpeg");
  touch = loadSound("audio/touch.mp3");
}

function setup() {
  createCanvas(1500,700);
  
  // BM1.loop();
  // BM1.setVolume(0.2);
  // random(Math.round(BM1.loop(),BM2.loop(),BM3.loop(),BM4.loop()));
  play = createSprite(1400,300,10,10);
  play.addImage(playImg);
  play.scale = 0.25;

  shop = createSprite(1150,75,10,10);
  shop.addImage(shopImg);
  shop.scale = 0.06;


  stage_B1 = createSprite(width/2,height/2,1300,600);
  stage_B1.shapeColor = "orange";
  stage_B2 = createSprite(width/2,380,1090,500);
  stage_B2.shapeColor = "lightblue";

  shop_B = createSprite(width/2,height/2,1300,600);
  shop_B.shapeColor = "lightgreen";

  s1 = createSprite(350,250,200,150);
  s1.shapeColor = "yellow";

  s2 = createSprite(600,250,200,150);
  s2.shapeColor = "brown";

  s3 = createSprite(850,250,200,150);
  s3.shapeColor = "brown";

  s4 = createSprite(1100,250,200,150);
  s4.shapeColor = "brown";

  s5 = createSprite(350,500,200,150);
  s5.shapeColor = "brown";

  s6 = createSprite(600,500,200,150);
  s6.shapeColor = "brown";

  s7 = createSprite(850,500,200,150);
  s7.shapeColor = "brown";

  s8 = createSprite(1100,500,200,150);
  s8.shapeColor = "red";


  helicopter = createSprite(1200,height/2-100);
  helicopter.addAnimation("hFlying",helicopterAnimation);
  // helicopter.debug = true;

  vHelicopter = createSprite(200,height/2-100);
  vHelicopter.addAnimation("vhFlying",vHelicopterAnimation);
  vHelicopter.scale = 0.6;


  FH = createSprite(1200,height/2-150);
  FH.addAnimation("FHFlying",helicopterAnimation);

  FVH = createSprite(200,height/2-50);
  FVH.addAnimation("FVHFlying",vHelicopterAnimation);
  FVH.scale = 0.6;

  BS = createSprite(200,height/2-100);
  BS.addImage(BSImg);
  BS.scale = 0.2;

  hBar = createSprite(1200,650,100,20);
  hBar.shapeColor = "blue";
  vhBar = createSprite(250,650,100,20);
  vhBar.shapeColor = "blue";


  fail = createSprite(width/2,height/2,100,100);
  fail.addImage(failImg);
  fail.scale = 0.3;
  completed = createSprite(width/2,height/2,100,100);
  completed.addImage(completedImg);
  completed.scale = 0.3;

  divider = createSprite(width/2,height/2,10,height);
  divider.visible = false;

  story = createSprite(1400,75,10,10);
  story.addImage(storyImg);
  story.scale = 0.75

  heart = createSprite(100,75,75,10,10);
  heart.addImage(heartImg);
  heart.scale = 0.45;

  info = createSprite(380,365,10,10);
  info.addImage(infoImg);
  info.scale = 0.3;
  
  insta = createSprite(600,400,75,10,10);
  insta.addImage(instaImg);
  insta.scale = 0.2;

  tele = createSprite(700,400,75,10,10);
  tele.addImage(teleImg);
  tele.scale = 0.15;

  missionAccomplished = createSprite(width/2, height/2-100, 10, 10);
  missionAccomplished.addImage(missionAccomplishedImg);
  missionAccomplished.scale = 0.7;
  
  replay = createSprite(150, height/2-75, 10, 10);
  replay.addImage(replayImg);
  replay.scale = 0.2;

  BL1 = createSprite(250, 250, 10, 10);
  BL1.addImage(heartImg);
  BL1.scale = 0.3

  BL2 = createSprite(600, 250, 10, 10);
  BL2.addImage(heartImg);
  BL2.scale = 0.3

  BL3 = createSprite(250, 475, 10, 10);
  BL3.addImage(heartImg);
  BL3.scale = 0.3

  BL4 = createSprite(600, 475, 10, 10);
  BL4.addImage(heartImg);
  BL4.scale = 0.3

  shopNow1 = createSprite(250, 340, 10, 10);
  shopNow1.addImage(shopNowImg);
  shopNow1.scale = 0.15;

  shopNow2 = createSprite(600, 340, 10, 10);
  shopNow2.addImage(shopNowImg);
  shopNow2.scale = 0.15;

  shopNow3 = createSprite(250, 550, 10, 10);
  shopNow3.addImage(shopNowImg);
  shopNow3.scale = 0.15;

  shopNow4 = createSprite(600, 550, 10, 10);
  shopNow4.addImage(shopNowImg);
  shopNow4.scale = 0.15;

  gear = createSprite(80, 650, 10, 10);
  gear.addImage(gearImg);
  gear.scale = 0.1;

  disc1 = createSprite(350, 380, 10, 10);
  disc1.addImage(discImg);
  disc1.scale = 0.48;

  disc2 = createSprite(590, 380, 10, 10);
  disc2.addImage(discImg);
  disc2.scale = 0.48;
  
  disc3 = createSprite(850, 380, 10, 10);
  disc3.addImage(discImg);
  disc3.scale = 0.48;
  
  disc4 = createSprite(1100, 380, 10, 10);
  disc4.addImage(discImg);
  disc4.scale = 0.48;
  
  mute = createSprite(760, 200, 10, 10);
  mute.addImage(muteImg);
  mute.scale = 0.2;

  music = createSprite(750,360,10,10);
  music.addImage(musicImg);
  music.scale = 0.12;

  back = createSprite(160,110,10,10);
  back.addImage(backImg);
  back.scale = 0.2;

  back2 = createSprite(50,650,10,10);
  back2.addImage(backImg);
  back2.scale = 0.2;

  Vbullet = new Group();
  HHbullet = new Group();
  Bbullets = new Group();
}

function draw(){
  background(homeBG_Img);

  hBar1Width = health;
  hBar1 = createSprite(1200,650,hBar1Width,20);
  hBar1.shapeColor = "red";
  hBar1.lifetime = 1;
  vhBar1Width = vhealth;
  vhBar1 = createSprite(250,650,vhBar1Width,20);
  vhBar1.shapeColor = "red";
  vhBar1.lifetime = 1;

  drawSprites();
  edges = createEdgeSprites();

  if (gameState ==="home"){
    home();
  }
  if (gameState === "stages"){
    stages();
  }
  if (gameState === "shop"){
    Shop();
  }
  if (gameState === "story"){
    Story();
  }
  if (gameState === "info"){
    Info();
  }
  if (gameState === "settings"){
    settings();
  }
  if (gameState === "soundTracks"){
    soundTracks();
  }
  if (gameState === "end"){
    end();
  }

  if (gameState === "stage1"){
    stage1();
  }
  if (gameState === "stage2"){
    stage2();
  }
  if (gameState === "stage3"){
    stage3();
  }
  if (gameState === "stage4"){
    stage4();
  }
  if (gameState === "stage5"){
    stage5();
  }
  if (gameState === "stage6"){
    stage6();
  }
  if (gameState === "stage7"){
    stage7();
  }
  if (gameState === "stage8"){
    stage8();
  }

  helicopter.collide(edges);
  helicopter.collide(divider);
  vHelicopter.collide(edges);

  if (changeLife === YES){
    if (bulletsR === 0 && life === 3  || health <= 0 && life === 3){
      life = 2;
      console.log(changeLife);
      changeLife = NO;
      console.log(changeLife);

    }else if (bulletsR === 0 && life === 2 || health <= 0 && life === 2){
      life = 1
      changeLife = NO;

    }else if (bulletsR === 0 && life === 1 || health <= 0 && life === 1){
      life = 0
      changeLife = NO;
    }
  }

  // if (gameState === "end"){
  //   info.x = 1150;
  //   info.y = 70;
  // }else{
  //   info.x = 380;
  //   info.y = 365;
  // }

  if (gameState === "info"){
    back2.x = 150;
    back2.y = 340;
  }
  else{
    back2.x = 50;
    back2.y = 650;
  }

  var imgx = 1150;
  var imgy = 380;
  var angle = atan2(mouseY - imgy, mouseX + imgx);

  push();
  translate(imgx,imgy);
  rotate(angle);
  imageMode(CENTER);
  animation(dummyheli, random(0,1.5), random(0,0.5), 100, 100);
  pop();

  push();
  textSize(20);
  fill("black")
  text("X: "+ mouseX + " Y: "+mouseY,mouseX,mouseY);
  pop();
  // console.log(current);
  // console.log("X: "+ mouseX + " Y: "+mouseY);
}

function home(){
  drawSprites();

  story.visible = true;
  play.visible = true;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = true;
  FVH.visible = true;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = true;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = true;
  dummyheli.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = true;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("WarCopter",550,100);

  textSize(30);
  strokeWeight(3);
  text("EARLY ACCESS",625,150);

  textSize(50);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  text(life,85,87.5);

  push();  
  FH.velocityX = -3;
  FVH.velocityX = 3;

  if(FH.x < -100){
    FH.x = width+100;
  }

  if(FVH.x > width+100){
    FVH.x = -100;
  }
  pop();

  push();
  if (mouseX > 1275 && mouseX < 1500 && mouseY > 20 && mouseY < 120){
    story.scale = 0.85;
  }else{
    story.scale = 0.75;
  }

  if (mouseX > 1085 && mouseX < 1215 && mouseY > 40 && mouseY < 105){
    shop.scale = 0.075;
  }else{
    shop.scale = 0.06;
  }

  if (mouseX > 1320 && mouseX < 1475 && mouseY > 270 && mouseY < 375){
    play.scale = 0.29;
  }else{
    play.scale = 0.25;
  }

  if (mouseX > 35 && mouseX < 120 && mouseY > 610 && mouseY < 690){
    gear.scale = 0.125;
  }else{
    gear.scale = 0.1; 
  }
  pop();

  if (mousePressedOver(play)){
    click.play();
    gameState = "stages";
  }

  if (mousePressedOver(shop)){
    click.play();
    gameState = "shop";
  }

  if (mousePressedOver(story)){
    click.play();
    gameState = "story";
  }

  if (mousePressedOver(gear)){
    click.play();
    gameState = "settings";
  }
}

function Shop(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = true;
  stage_B2.visible = false;
  shop_B.visible = true;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  shop.visible = false;
  insta.visible = false;
  tele.visible = false;
  dummyheli.visible = true;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = true;
  BL2.visible = true;
  BL3.visible = true;
  BL4.visible = true;
  shopNow1.visible = true;
  shopNow2.visible = true;
  shopNow3.visible = true;
  shopNow4.visible = true;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("SHOP",600,130);

  textSize(40);
  strokeWeight(3);
  text("Coins "+coins,1100,120);
  text("1", 240, 260);
  text("2", 590, 260);
  text("3", 240, 485);
  text("4", 590, 485);
  pop();

  //top line
  strokeWeight(5);
  line(100,160,1400,160);

  //mid line
  push();
  strokeWeight(10);
  line(width/2 + 150,165,width/2 + 150,645);
  pop();

  push();
  if (mouseX > 110 && mouseX < 200 && mouseY > 65 && mouseY < 150){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }
  pop();

  if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function Story(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("STORY",600,120);
  textSize(50);
  strokeWeight(4);
  text("The villain named Lupin has steal all the",230,200);
  text("money of the city, so now there is an entry",230,270);
  text("of our Guardian in a helicopter, fighting",230,340);
  text("with the army of Lupin to bring the money",230,410);
  text("back to the city.",230,480);

  push();
  if (mouseX > 110 && mouseX < 200 && mouseY > 65 && mouseY < 150){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }
  pop();

  if (current === 9 && mousePressedOver(back)){
    click.play();
    gameState = "end";
  }else if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function Info(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = false;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = true;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = true;
  tele.visible = true;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("INFO",600,120);
  textSize(50);
  strokeWeight(4);
  text("The bullet's damage depends on the",300,200);
  text("movement of the Helicopters. If you need",300,270);
  text("any help from me then you can contact",300,340);
  text("me here :)",300,410);

  textSize(30);
  strokeWeight(0);
  stroke("red");
  fill("red");
  text("New Update Comming Soon!!",230,600);
  textSize(20);
  strokeWeight(2);
  stroke("grey");
  fill("black");
  text("v1.4.0",1200,600);

  push();
  if (mouseX > 95 && mouseX < 200 && mouseY > 280 && mouseY < 395){
    back2.scale = 0.29;
  }else{
    back2.scale = 0.25;
  }

  if (mouseX > 565 && mouseX < 630 && mouseY > 365 && mouseY < 430){
    insta.scale = 0.28;
  }else{
    insta.scale = 0.2;
  }

  if (mouseX > 660 && mouseX < 730 && mouseY > 365 && mouseY < 430){
    tele.scale = 0.20;
  }else{
    tele.scale = 0.15;
  }
  pop();

  if (mousePressedOver(tele)){
    click.play();
    alert("My Telegram profile URL is https://t.me/Masha_007_Masha");
  }

  if (mousePressedOver(insta)){
    click.play();
    alert("My Instagram profile URL is https://www.instagram.com/masha_007_masha/");
  }

  if(mousePressedOver(back2)){
    click.play();
    gameState = "settings";
  }
}

function stages(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  dummyheli.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = true;
  s2.visible = true;
  s3.visible = true;
  s4.visible = true;
  s5.visible = true;
  s6.visible = true;
  s7.visible = true;
  s8.visible = true;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("STAGES",600,120);
  text("1",325,275);
  text("2",575,275);
  text("3",825,275);
  text("4",1075,275);
  text("5",325,525);
  text("6",575,525);
  text("7",825,525);
  text("8",1075,525);

  if(current === 1){
    s1.shapeColor = "yellow";
    s2.shapeColor = "brown";
    s3.shapeColor = "brown";
    s4.shapeColor = "brown";
    s5.shapeColor = "brown";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";
  }else if(current === 2){
    s1.shapeColor = "green";
    s2.shapeColor = "yellow";
    s3.shapeColor = "brown";
    s4.shapeColor = "brown";
    s5.shapeColor = "brown";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 3){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "yellow";
    s4.shapeColor = "brown";
    s5.shapeColor = "brown";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 4){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "yellow";
    s5.shapeColor = "brown";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 5){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "green";
    s5.shapeColor = "yellow";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 6){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "green";
    s5.shapeColor = "green";
    s6.shapeColor = "yellow";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 7){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "green";
    s5.shapeColor = "green";
    s6.shapeColor = "green";
    s7.shapeColor = "yellow";
    s8.shapeColor = "red";  
  }else if(current === 8){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "green";
    s5.shapeColor = "green";
    s6.shapeColor = "green";
    s7.shapeColor = "green";
    s8.shapeColor = "purple";
  }

  changeLife = YES;

  if (mousePressedOver(s1) && current === 1 && life !== 0 || mousePressedOver(s1) && current === 2 && life !== 0 || 
    mousePressedOver(s1) && current === 3 && life !== 0 || mousePressedOver(s1) && current === 4 && life !== 0 || 
    mousePressedOver(s1) && current === 5 && life !== 0 || mousePressedOver(s1) && current === 6 && life !== 0 || 
    mousePressedOver(s1) && current === 7 && life !== 0 || mousePressedOver(s1) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage1";
  }else if (mousePressedOver(s1) && current === 1 && life === 0 || mousePressedOver(s1) && current === 2 && life === 0 || 
    mousePressedOver(s1) && current === 3 && life === 0 || mousePressedOver(s1) && current === 4 && life === 0 || 
    mousePressedOver(s1) && current === 5 && life === 0 || mousePressedOver(s1) && current === 6 && life === 0 || 
    mousePressedOver(s1) && current === 7 && life === 0 || mousePressedOver(s1) && current === 8 && life === 0){
    NEL = createSprite(500, 685, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;
  }
  
  if (mousePressedOver(s2) && current === 2 && life !== 0 || mousePressedOver(s2) && current === 3 && life !== 0 || 
    mousePressedOver(s2) && current === 4 && life !== 0 || mousePressedOver(s2) && current === 5 && life !== 0 || 
    mousePressedOver(s2) && current === 6 && life !== 0 || mousePressedOver(s2) && current === 7 && life !== 0 || 
    mousePressedOver(s2) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage2";
  }else if(mousePressedOver(s1) && current === 2 && life === 0 || mousePressedOver(s1) && current === 3 && life === 0 || 
    mousePressedOver(s1) && current === 4 && life === 0 || mousePressedOver(s1) && current === 5 && life === 0 || 
    mousePressedOver(s1) && current === 6 && life === 0 || mousePressedOver(s1) && current === 7 && life === 0 || 
    mousePressedOver(s1) && current === 8 && life === 0){
    NEL = createSprite(500, 685, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;
  }

  if (mousePressedOver(s3) && current === 3 && life !== 0 || mousePressedOver(s3) && current === 4 && life !== 0 || 
  mousePressedOver(s3) && current === 5 && life !== 0 || mousePressedOver(s3) && current === 6 && life !== 0 || 
  mousePressedOver(s3) && current === 7 && life !== 0 || mousePressedOver(s3) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage3";
  }else if(
    mousePressedOver(s1) && current === 3 && life === 0 || mousePressedOver(s1) && current === 4 && life === 0 || 
    mousePressedOver(s1) && current === 5 && life === 0 || mousePressedOver(s1) && current === 6 && life === 0 || 
    mousePressedOver(s1) && current === 7 && life === 0 || mousePressedOver(s1) && current === 8 && life === 0){
    NEL = createSprite(500, 685, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;
  }

  if (mousePressedOver(s4) && current === 4 && life !== 0 || mousePressedOver(s4) && current === 5 && life !== 0 || 
  mousePressedOver(s4) && current === 6 && life !== 0 || mousePressedOver(s4) && current === 7 && life !== 0 || 
  mousePressedOver(s4) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage4";
  }else if(
    mousePressedOver(s1) && current === 4 && life === 0 || mousePressedOver(s1) && current === 5 && life === 0 || 
    mousePressedOver(s1) && current === 6 && life === 0 || mousePressedOver(s1) && current === 7 && life === 0 || 
    mousePressedOver(s1) && current === 8 && life === 0){
    NEL = createSprite(500, 685, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;
  }

  if (mousePressedOver(s5) && current === 5 && life !== 0 || mousePressedOver(s5) && current === 6 && life !== 0 || 
  mousePressedOver(s5) && current === 7 && life !== 0 || mousePressedOver(s5) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage5";
  }else if(
    mousePressedOver(s1) && current === 5 && life === 0 || mousePressedOver(s1) && current === 6 && life === 0 || 
    mousePressedOver(s1) && current === 7 && life === 0 || mousePressedOver(s1) && current === 8 && life === 0){
    NEL = createSprite(500, 685, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;
  }

  if (mousePressedOver(s6) && current === 6 && life !== 0 || mousePressedOver(s6) && current === 7 && life !== 0 || 
  mousePressedOver(s6) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage6";
  }else if(
    mousePressedOver(s1) && current === 6 && life === 0 || mousePressedOver(s1) && current === 7 && life === 0 || 
    mousePressedOver(s1) && current === 8 && life === 0){
    NEL = createSprite(500, 685, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;
  }

  if (mousePressedOver(s7) && current === 7 && life !== 0 || mousePressedOver(s7) && current === 8  && life !== 0){
    click.play();
    gameState = "stage7";
  }else if(
    mousePressedOver(s1) && current === 7 && life === 0 || mousePressedOver(s1) && current === 8 && life === 0){
    NEL = createSprite(500, 685, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;
  }

  if (mousePressedOver(s8) && current === 8 && life !== 0){
    click.play();
    gameState = "stage8";
  }else if(mousePressedOver(s1) && current === 8 && life === 0){
    NEL = createSprite(500, 685, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;
  }

  push();
  if (mouseX > 100 && mouseX < 215 && mouseY > 55 && mouseY < 160){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }

  if (mouseX > 250 && mouseX < 450 && mouseY > 175 && mouseY < 325){
    s1.width = 220;
    s1.height = 170;
  }else{
    s1.width = 200;
    s1.height = 150;
  }
  if (mouseX > 500 && mouseX < 700 && mouseY > 175 && mouseY < 325){
    s2.width = 220;
    s2.height = 170;
  }else{
    s2.width = 200;
    s2.height = 150;
  }
  if (mouseX > 750 && mouseX < 950 && mouseY > 175 && mouseY < 325){
    s3.width = 220;
    s3.height = 170;
  }else{
    s3.width = 200;
    s3.height = 150;
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 175 && mouseY < 325){
    s4.width = 220;
    s4.height = 170;
  }else{
    s4.width = 200;
    s4.height = 150;
  }
  if (mouseX > 250 && mouseX < 450 && mouseY > 420 && mouseY < 570){
    s5.width = 220;
    s5.height = 170;
  }else{
    s5.width = 200;
    s5.height = 150;
  }
  if (mouseX > 500 && mouseX < 700 && mouseY > 420 && mouseY < 570){
    s6.width = 220;
    s6.height = 170;
  }else{
    s6.width = 200;
    s6.height = 150;
  }
  if (mouseX > 750 && mouseX < 950 && mouseY > 420 && mouseY < 570){
    s7.width = 220;
    s7.height = 170;
  }else{
    s7.width = 200;
    s7.height = 150;
  }
  if (mouseX > 1000 && mouseX < 1200 && mouseY > 420 && mouseY < 570){
    s8.width = 220;
    s8.height = 170;
  }else{
    s8.width = 200;
    s8.height = 150;
  }
  pop();

 if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function settings(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = true;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  dummyheli.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = true;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("Settings",575,120);
  // textSize(40);
  // strokeWeight(4);
  // text("Original",280,525);
  // text("Havana",1030,525);

  push();
  if (mouseX > 110 && mouseX < 200 && mouseY > 65 && mouseY < 150){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }
  
  if (mouseX > 290 && mouseX < 465 && mouseY > 265 && mouseY < 435){
    info.scale = 0.35;
  }else{
    info.scale = 0.3; 
  }

  if (mouseX > 690 && mouseX < 800 && mouseY > 295 && mouseY < 730){
    music.scale = 0.15;
  }else{
    music.scale = 0.12; 
  }
  pop();

  if (mousePressedOver(info)){
    click.play();
    gameState = "info";
  }

  if (mousePressedOver(music)){
    click.play();
    gameState = "soundTracks";
  }

  if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function soundTracks(){
  background(shopBG_Img);
  drawSprites();

  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  dummyheli.visible = false;
  disc1.visible = true;
  disc2.visible = true;
  disc3.visible = true;
  disc4.visible = true;
  mute.visible = true;
  music.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("Sound Tracks",500,120);
  textSize(40);
  strokeWeight(4);
  text("Original",280,525);
  text("Havana",1030,525);

  textSize(35);
  strokeWeight(3);
  text("Dance Monkey",470,525);

  textSize(30);
  text("Call Me By",780,525);
  text("Your Name",778, 555);

  textSize(40);
  strokeWeight(4);

  push();
  if (mouseX > 110 && mouseX < 200 && mouseY > 65 && mouseY < 150){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }
  if (mouseX > 250 && mouseX < 440 && mouseY > 290 && mouseY < 470){
    disc1.scale = 0.55;
  }else{
    disc1.scale = 0.48;
  }
  if (mouseX > 495 && mouseX < 680 && mouseY > 290 && mouseY < 470){
    disc2.scale = 0.55;
  }else{
    disc2.scale = 0.48;
  }
  if (mouseX > 750 && mouseX < 940 && mouseY > 285 && mouseY < 470){
    disc3.scale = 0.55;
  }else{
    disc3.scale = 0.48;
  }
  if (mouseX > 1010 && mouseX < 1190 && mouseY > 290 && mouseY < 470){
    disc4.scale = 0.55;
  }else{
    disc4.scale = 0.48;
  }
  if (mouseX > 720 && mouseX < 800 && mouseY > 160 && mouseY < 240){
    mute.scale = 0.3;
  }else{
    mute.scale = 0.2;
  }
  pop();

  if (mousePressedOver(mute)){
    ED();
  }

  if (mousePressedOver(disc1)){
    d1();
    disc1.rotationSpeed = 5;
    disc2.rotationSpeed = 0;
    disc3.rotationSpeed = 0;
    disc4.rotationSpeed = 0;
  }
  if (mousePressedOver(disc2)){
    d2();
    disc1.rotationSpeed = 0;
    disc2.rotationSpeed = 5;
    disc3.rotationSpeed = 0;
    disc4.rotationSpeed = 0;
  }
  if (mousePressedOver(disc3)){
    d3();
    disc1.rotationSpeed = 0;
    disc2.rotationSpeed = 0;
    disc3.rotationSpeed = 5;
    disc4.rotationSpeed = 0;
  }
  if (mousePressedOver(disc4)){
    d4();
    disc1.rotationSpeed = 0;
    disc2.rotationSpeed = 0;
    disc3.rotationSpeed = 0;
    disc4.rotationSpeed = 5;
  }
  if (mousePressedOver(back)){
    click.play();
    gameState = "settings";
  }
}

function stage1(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black")
  text("STAGE-1", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage1WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  helicopter.visible = true;
  vHelicopter.visible = true;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();  
  VHshoot1();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot1();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0 && vhealth !== 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1575);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1775);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },2750);
  }
  if (health <= 0 && vhealth !== 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },1200);
  }
  else if (vhealth === 0 || vhealth <= 0 && bulletsR === 0){
    setTimeout(function(){
      completed.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    current = 2;
    coins +=200;
    },1200);
  }

  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();
  
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
  }
}

function stage2(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white")
  text("STAGE-2", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage2WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();  
  VHshoot2();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;
  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot2();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0 && vhealth !== 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1575);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1775);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },2750);
  }
  if (health <= 0 && vhealth !== 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },1200);
  }
  else if (vhealth === 0 || vhealth <= 0 && bulletsR === 0){
    setTimeout(function(){
      completed.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    current = 3;
    coins +=200;
    },1200);
  }

  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
  }
}

function stage3(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white")
  text("STAGE-3", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage3WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot3();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot3();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0 && vhealth !== 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1575);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1775);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },2750);
  }
  if (health <= 0 && vhealth !== 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },1200);
  }
  else if (vhealth === 0 || vhealth <= 0 && bulletsR === 0){
    setTimeout(function(){
      completed.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    current = 4;
    coins +=300;
    },1200);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
  }
}

function stage4(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black")
  text("STAGE- 4", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage4WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot4();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-15;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 15;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-15;
  }
  helicopter.velocityY +=0.9;

  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot4();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0 && vhealth !== 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1575);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1775);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },2750);
  }
  if (health <= 0 && vhealth !== 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },1200);
  }
  else if (vhealth === 0 || vhealth <= 0 && bulletsR === 0){
    setTimeout(function(){
      completed.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    current = 5;
    coins +=200;
    },1200);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
  }
}

function stage5(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white");
  text("STAGE-5", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage5WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot5();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-15;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 15;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-15;
  }
  helicopter.velocityY +=0.9;

  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot5();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0 && vhealth !== 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1575);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1775);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },2750);
  }
  if (health <= 0 && vhealth !== 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },1200);
  }
  else if (vhealth === 0 || vhealth <= 0 && bulletsR === 0){
    setTimeout(function(){
      completed.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    current = 6;
    coins +=300;
    },1200);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
  }
}

function stage6(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black");
  text("STAGE- 6", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage6WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();

  VHshoot6();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-15;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 15;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-15;
  }
  helicopter.velocityY +=0.9;

  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot6();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0 && vhealth !== 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1575);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1775);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },2750);
  }
  if (health <= 0 && vhealth !== 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },1200);
  }
  else if (vhealth === 0 || vhealth <= 0 && bulletsR === 0){
    setTimeout(function(){
      completed.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    current = 7;
    coins +=300;
    },1200);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
  }
}

function stage7(){
  background(BADSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black");
  text("STAGE-7", width/2-100,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage7WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();

  VHshoot7();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-15;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 15;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-15;
  }
  helicopter.velocityY +=0.9;

  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot7();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0 && vhealth !== 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1575);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1775);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },2750);
  }
  if (health <= 0 && vhealth !== 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },1200);
  }
  else if (vhealth === 0 || vhealth <= 0 && bulletsR === 0){
    setTimeout(function(){
      completed.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    current = 8;
    coins +=400;
    },1200);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
  }
}

function stage8(){
  background(BANSImg);
  drawSprites();

  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white");
  text("STAGE-8 (BOSS LEVEL)", width/2-200,75);
  text("Bullets- "+bulletsR+"/"+tBullets, 1150,75);
  text("Winning Prize +"+stage8WP,25,50);
  text("Health"+health, width/2-100,125);

  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = false;
  BS.visible = true;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  BS.velocityX = 0;

  BSshoot();

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  if (keyWentDown(32) && bulletsR>0){
    Hshoot8();
    bulletsR -= 1;
  }

  if (HHbullet.isTouching(BS)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  if (bulletsR === 0 && vhealth !== 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1575);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1775);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },2750);
  }
  if (health <= 0 && vhealth !== 0){
    setTimeout(function(){
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){ 
      fail.visible = false;
    }, 1000);
  
    setTimeout(function(){
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    },1200);
  }
  else if (vhealth === 0 || vhealth <= 0 && bulletsR === 0){
    setTimeout(function(){
      completed.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 10);

    setTimeout(function(){
    gameState = "end";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
    current = 9;
    coins +=750;
    },1200);
  }
  
  push();
  if (mouseX > 5 && mouseX < 90 && mouseY > 600 && mouseY < 700){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR = 10;
    health = 100;
    vhealth = 100;
  }
}

function end(){
  drawSprites();

  story.visible = true;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  dummyheli.visible = false;
  missionAccomplished.visible = true;
  replay.visible = true;
  BL1.visible = false;
  BL2.visible = false;
  BL3.visible = false;
  BL4.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  gear.visible = true;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("WarCopter",50,100);

  textSize(30);
  strokeWeight(3);
  text("EARLY ACCESS",125,150);
  stroke("black");
  fill("grey");
  text("NEW LEVELS COMMING SOON!!", 500, 660);
  push();

  if (mouseX > 1275 && mouseX < 1500 && mouseY > 20 && mouseY < 120){
    story.scale = 0.85;
  }else{
    story.scale = 0.75;
  }
  if (mouseX > 35 && mouseX < 120 && mouseY > 610 && mouseY < 690){
    gear.scale = 0.125;
  }else{
    gear.scale = 0.1; 
  }
  if (mouseX > 60 && mouseX < 230 && mouseY > 235 && mouseY < 315){
    replay.scale = 0.25;
  }else{
    replay.scale = 0.2;
  }
  pop();

  if (mousePressedOver(replay)){
    click.play();
    gameState = "home";
    life = 3
    current = 1;
    coins = 200;
    changeLife = YES
  }

  if (mousePressedOver(story)){
    click.play();
    gameState = "story";
  }

  if (mousePressedOver(gear)){
    click.play();
    gameState = "settings";
  }
}

function Hshoot1(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -25;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();
  shoot.setVolume(0.3);
  HHbullet.add(Hbullet);
}
function Hshoot2(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -30;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();
  shoot.setVolume(0.3);

  HHbullet.add(Hbullet);
}
function Hshoot3(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -35;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.3);

  HHbullet.add(Hbullet);
}
function Hshoot4(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -40;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.3);
  HHbullet.add(Hbullet);
}
function Hshoot5(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -40;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.3);
  HHbullet.add(Hbullet);
}
function Hshoot6(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -40;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.3);
  HHbullet.add(Hbullet);
}
function Hshoot7(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -45;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.3);
  HHbullet.add(Hbullet);
}
function Hshoot8(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -50;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.3);
  HHbullet.add(Hbullet);
}

function VHshoot1() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.3);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 10;
  }
}
function VHshoot2() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 30;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.3);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 15;
  }
}
function VHshoot3() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 35;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.3);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 20;
  }
}
function VHshoot4() {
  if(frameCount % 30 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 40;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.3);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 25;
  }
}
function VHshoot5() {
  if(frameCount % 25 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 40;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.3);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 30;
  }
}
function VHshoot6() {
  if(frameCount % 25 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 40;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.3);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 35;
  }
}
function VHshoot7() {
  if(frameCount % 25 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 45;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.3);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 40;
  }
}

function BSshoot(){
  if(frameCount % 20 === 0){
    Bbullet= createSprite(200,random(150,600), 10, 10);
    Bbullet.velocityX = 50; 
    Bbullet.addImage(bullet1_Img);
    Bbullet.scale=0.08;
    Bbullet.lifetime = 1000;
    BS.y = Bbullet.y;
    shoot.play();  
    shoot.setVolume(0.3);

    Bbullets.add(Bbullet);
  }

  if (Bbullets.isTouching(helicopter)){
    Bbullet.destroy();
    health -= 50;
  }
}

function d1(){
  BM2.stop();
  BM3.stop();
  BM4.stop();

  BM1.loop();
  BM1.setVolume(0.2);
}

function d2(){
  BM1.stop();
  BM3.stop();
  BM4.stop();
  
  BM2.loop();
  BM2.setVolume(0.2);
}

function d3(){
  BM1.stop();
  BM2.stop();
  BM4.stop();

  BM3.loop();
  BM3.setVolume(0.2);
}

function d4(){
  BM1.stop();
  BM2.stop();
  BM3.stop();

  BM4.loop();
  BM4.setVolume(0.2);
}

function ED(){
  BM1.stop();
  BM2.stop();
  BM3.stop();
  BM4.stop();

  disc1.rotationSpeed = 0;
  disc2.rotationSpeed = 0;
  disc3.rotationSpeed = 0;
  disc4.rotationSpeed = 0;
}