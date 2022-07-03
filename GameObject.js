class GameObject{
    constructor(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        console.log("holagame");
        console.log("srcgame:",config.src);
        this.sprite = new Sprite({
            GameObject:this,
            src:config.src ||"/images/characters/gwy_v2.png",
            useShadow:config.useShadow
        });
    }
}