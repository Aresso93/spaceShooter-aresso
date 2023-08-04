class Projectile extends GameObject{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.speed = 15;
        this.isAlive = true;
        this.healthPoints = 1;
    }

    draw(ctx){
        ctx.fillStyle = "green";
        super.draw(ctx);
        this.death();
    }

    move(){
        this.y = this.y - this.speed;
        this.outOfGame();
    }

    outOfGame(){
        if (this.y + this.height <= 0) {
            this.isAlive = false;
        }
    }

    death(){
        if (this.healthPoints <= 0){
            this.isAlive = false;
        }
    }
}