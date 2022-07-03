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
    DemoRoom: {
        lowerImage: "/images/maps/DemoLower.png",
        upperImage: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 4,
                y: 6,
                src: "/images/characters/gwy_v2.png",
                useShadow: true
            }),
            npc1: new GameObject({
                x: 9,
                y: 7,
                src: "/images/characters/people/npc1.png",
                useShadow: true
            })
        }
    },
    Kitchen: {
        lowerImage: "/images/maps/KitchenLower.png",
        upperImage: "/images/maps/KitchenUpper.png",
        gameObjects: {
            npc3: new GameObject({
                x: 3,
                y: 5,
                src: "/images/characters/gwy_v2.png",
                useShadow: true
            }),
            npc4: new GameObject({
                x: 4,
                y: 8,
                src: "/images/characters/people/npc3.png",
                useShadow: true
            })
        }
    }
}