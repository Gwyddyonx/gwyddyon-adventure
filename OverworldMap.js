class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerImage;

        this.upperImage = new Image();
        this.upperImage.src = config.upperImage;
    }

    drawLowerMap(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperMap(ctx) {
        ctx.drawImage(this.upperImage, 0, 0);
    }

}

window.OverworldMap = {
    Room: {
        lowerImage: "/images/maps/DemoLower.png",
        upperImage: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                x: utils.withGrid(5),
                y: utils.withGrid(7),
                src: "/images/characters/gwy.png",
                useShadow: true,
                isPlayerControlled: true
            })
        }
    },
    Kitchen: {
        lowerImage: "/images/maps/KitchenLower.png",
        upperImage: "/images/maps/KitchenUpper.png",
        gameObjects: {
            npc3: new Person({
                x: utils.withGrid(3),
                y: utils.withGrid(5),
                src: "/images/characters/gwy_v2.png",
                useShadow: true,
                isPlayerControlled: true
            }),
            npc4: new Person({
                x: utils.withGrid(4),
                y: utils.withGrid(8),
                src: "/images/characters/people/npc3.png",
                useShadow: true
            })
        }
    }
}