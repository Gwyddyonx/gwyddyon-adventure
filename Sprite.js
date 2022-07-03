class Sprite {
    constructor(config) {

        //set images
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //shadow
        this.useShadow = config.useShadow || false;
        if (this.useShadow) {
            this.shadow = new Image();
            this.shadow.src = "/images/characters/shadow.png";
            this.shadow.onload = () => {
                this.isShadowLoaded = true;
            }
        }

        //set animations
        this.animations = config.animations || {
            idleDown: [
                [0, 0]
            ]
            /*wallDown = [
                [0,0],[0,1],[0,2],[0,3]
            ]*/
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //reference
        this.GameObject = config.GameObject;
    }

    draw(ctx) {
        const x = this.GameObject.x * 16 - 8;
        const y = this.GameObject.y * 16 - 18;

        if (this.isLoaded)
            ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
        if (this.isShadowLoaded)
            ctx.drawImage(this.shadow, 0, 0, 32, 32, x, y, 32, 32);

    }
}