class Building extends GameObject {


    constructor(x, y, w, h){

        super(x, y, w, h)
        this.healthPoints = 5;
        this.speed = 0;
    }



    draw(ctx) {
        super.draw(ctx);
        console.log(this.healthPoints);
    }


    death(){
        if (this.healthPoints <= 0){
           
        }
    }


}