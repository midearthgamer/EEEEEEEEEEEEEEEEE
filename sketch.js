var dirts=[];
var vacs=[];
var font;
var score = 10;
var scorebg;
var costdirt=2;
var costvac=2;
var freespace=true;

function preload(){
  scorebgIMG=loadImage("scorebg.png")
  font=loadFont("Jackwrite.ttf");
  barImg=loadImage("bar.png");
  dirtImg= loadImage("Pot5.png");
  vacImg= loadImage("vacfull.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  //scorebg
  scorebg=createSprite(75,50);
  scorebg.addImage("scorebg",scorebgIMG)
  //bar and imgs
  bar=createSprite(width/2, height-100);
  bar.addImage("bar",barImg);
  dirt=createSprite(width/2-80,height-100);
  dirt.addImage("dirt",dirtImg)
  dirt.scale=0.7
  vac=createSprite(width/2+80,height-100);
  vac.addImage("vac",vacImg)
  vac.scale=0.8
  //obj in the mouse
  follow=createSprite(mouseX,mouseY);
  follow.addImage("dirt",dirtImg);
  follow.addImage("vac",vacImg);
  follow.visible=false;
}

function draw(){
  console.log(mouseY)
  textFont(font);
  background(62, 63, 71)
  drawSprites()
  textSize(85);
  stroke("lime")
  fill("green")
  text("Plant Game",width/2-250,height/10.5+0)
  textSize(35);
  stroke(148,128,128)
  if (score >= costdirt) {
    stroke("lime")
    fill("green")
  }
  else {
    fill("red")
  }
  text(costdirt.toFixed(2),width/2-117,height-145);
  if (score >= costvac) {
    stroke("lime")
    fill("green")
  }
  else {
    fill("red")
  }
  text(costvac.toFixed(2),width/2+42,height-145);
  stroke(128,128,128)
  text(score.toFixed(2),40,60);
  stroke(66,67,75)
    for(var i=0;i<width;i+=100){
      for(var j=0;j<height;j+=100){     
        line(i,0,i,height);
        line(0,i,width,i);
      }
  }
  selectObject();
  follow.x=mouseX;
  follow.y=mouseY;
  //picking up 
  for(var i=0; i<vacs.length;i++){
    vacs[i].pickup();
  }
  
}

function selectObject(){
  if(mousePressedOver(dirt)){
    objectPickedUp("dirt");
    selection="dirt";
  }
  if(mousePressedOver(vac)){
    objectPickedUp("vac")
    selection="vac"
  }
}

function objectPickedUp(obj){
  if(obj=="dirt"){
    follow.changeImage("dirt");
  } else if(obj=="vac"){
    follow.changeImage("vac");
  }
  follow.visible=true;
}

function mouseClicked(){
  if(mouseY<height-300){
    

    var xused= Math.ceil(mouseX/100)*100-50;
    var yused= Math.ceil(mouseY/100)*100-50
    spacechecker(xused,yused);

    if(freespace){
    if(selection=="dirt" && score>costdirt){
      var spritenew= new Dirt(Math.ceil(mouseX/100)*100-50,Math.ceil(mouseY/100)*100-50)
      spritenew.growing();
      score = score-costdirt;
      costdirt*=1.2;
      dirts.push(spritenew);
    }
    if(selection=="vac" && score>costvac){
      var spritenew= new Vacuum(Math.ceil(mouseX/100)*100-50,Math.ceil(mouseY/100)*100-50)
      vacs.push(spritenew);
      score=score-costvac;
      costvac*=1.2;

    }
   }
   follow.visible=false;
   selection=null;
   freespace=true;

   }
}

function spacechecker(x,y){
  for(var i=0; i<dirts.length; i++){
    if(x==dirts[i].x && y== dirts[i].y){
      freespace=false;
    }
  }
  for(var i=0; i<vacs.length; i++){
    if(x==vacs[i].x && y== vacs[i].y){
      freespace=false;
    }
  }
}

