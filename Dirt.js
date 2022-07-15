class Dirt{
        constructor(posx,posy){
            this.x=posx;
            this.y=posy;
            this.stage=1;
            this.image1= loadImage("pot2.png");
            this.image2= loadImage("pot3.png");
            this.image3= loadImage("pot4.png");
            this.image4= loadImage("pot5.png");
            this.body=createSprite(this.x,this.y,50,50)
            this.body.addImage("1",this.image1);
            this.body.addImage("2",this.image2);
            this.body.addImage("3",this.image3);
            this.body.addImage("4",this.image4);
        } 
        
    grow1(){
        setTimeout(() => {
            this.body.changeImage("2")
          }, 3000);
          
    }

    grow2(){
        setTimeout(() => {
            this.body.changeImage("3")
          }, 6500);
          
    }

    grow3(){
        setTimeout(() => {
            this.body.changeImage("4")
            this.stage=2;
          }, 10000);
          
    }

    growing(){
        
        if(this.stage==1){
            this.grow1();
            this.grow2();
            this.grow3();
            
            
        }
        
    }

    pickup(){
        this.stage=1;
        setTimeout(() => {
            this.body.changeImage("1");
            this.growing();
          }, 1000);
    }
    
}

