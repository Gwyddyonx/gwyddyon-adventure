class GameObject{
    constructor(config){
        this.isMounted = false;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            GameObject:this,
            src:config.src ||"/images/characters/gwy.png",
            useShadow:config.useShadow
        });
    }

    mount(map){
        /*this.isMounted = true;
        map.addWall(this.x, this.y);*/
    }

    update(){

    }
}