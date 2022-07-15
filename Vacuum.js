class Vacuum{
    constructor(posx,posy){
        this.x=posx;
        this.y=posy;
        this.image1= loadImage("vacempty.png");
        this.image2= loadImage("vacfull.png");
        this.body=createSprite(posx,posy);
        this.body.addImage("1",this.image1);
        this.body.addImage("2",this.image2);
        this.left=createSprite(posx-50,posy,20,50);
        this.right=createSprite(posx+50,posy,20,50);
        this.up=createSprite(posx,posy-50,50,20);
        this.down=createSprite(posx,posy+50,50,20);
        this.pickupcount=0;
        this.left.visible=false;
        this.right.visible=false;
        this.up.visible=false;
        this.down.visible=false;
        
    }

    pickup(){
            if(this.pickupcount<4){
            for(var j=0;j<dirts.length;j++){
                if((this.left.isTouching(dirts[j].body)||this.right.isTouching(dirts[j].body)||this.up.isTouching(dirts[j].body)||this.down.isTouching(dirts[j].body))){
                    if(dirts[j].stage==2){     
                        score++                
                        dirts[j].pickup();
                        this.pickupcount++;

                    }
                }
            }
        } 
            
        
        if(this.pickupcount==4){
            this.body.changeImage("2");
            this.reload();
            
        }

        
        
    }

    reload(){
        setTimeout(() => {
            this.pickupcount=0;
            this.body.changeImage("1");
          }, 5000);

        
    }
}