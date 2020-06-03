class Car{
    constructor(x,y,width,height,weight,speed){
        this.x = x
        this.y = y
        this.weight = weight
        this.speed = speed
        this.height = height
        this.width = width
        this.sprite = createSprite(this.x,this.y,this.width,this.height)
        this.sprite.velocityX = this.speed
        this.sprite.shapeColor = color(255);
    }
}