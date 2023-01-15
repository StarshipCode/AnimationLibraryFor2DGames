/*
"imageSrc" is the path of the image for the animation.
"frames" is the number of frames of the animation
"framesWidth" is the width of each frame
"framesHeight" is the height of each frame
"delay" is the delay between each frame in milliseconds
"ctx" is the 2D context of the canvas were you want to draw the animation
"size" is a zoom on the image. The default is 1 wich is the same size of the original image.
"x" is the coordinate x were to draw the animation
"y" is the coordinate y were to draw the animation

For drawing the animation you have to call the function update():


let playerAnimation = new Animation("./player.png",10,64,64,100, ctx, 2)
function gameLoop(){
    playerAnimation.update()
    requestAnimationFrame(gameLoop)
}

gameLoop()

*/
function Animation(imageSrc, frames, framesWidth, framesHeight, delay = 100, ctx, size = 1) {
    this.imageSrc = imageSrc
    this.image = new Image()
    this.image.src = this.imageSrc

    this.frames = frames
    this.framesWidth = framesWidth
    this.framesHeight = framesHeight

    this.lastDrawTime = new Date().getTime()
    this.delay = delay
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.frame = 0
    this.size = size
    this.update = () => {
        this.ctx.drawImage(this.image, this.frame * this.framesWidth, 0, this.framesWidth, this.framesHeight, this.x, this.y, this.framesWidth * this.size, this.framesHeight * this.size)
        if (new Date().getTime() - this.lastDrawTime >= this.delay) {
            this.frame++
            if (this.frame == this.frames)
                this.frame = 0
            this.lastDrawTime = new Date().getTime()
        }
    }
}
