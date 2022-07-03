class Overworld{

    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop(){
        const step = ()=>{
            //lower map
            this.map.drawLowerMap(this.ctx);
            //game objects here
            Object.values(this.map.gameObjects).forEach(object=>{
                object.sprite.draw(this.ctx);
            })

            //upper map
            this.map.drawUpperMap(this.ctx);
            requestAnimationFrame(()=>{
                step();
            })
        }
        step();
    }

    init(){
        console.log("hello from Overworld",this);
        this.map = new OverworldMap(window.OverworldMap.Kitchen);
        console.log("map",this.map)
        this.startGameLoop();
        //map
        /*const image = new Image();
        image.onload = ()=>{
            this.ctx.drawImage(image,0,0)
        };

        image.src = "/images/maps/DemoLower.png"

        console.log("before holaover");

        //objects
        const hero = new GameObject({
            x:4,
            y:6,
            src:"/images/characters/gwy_v2.png",
            useShadow:true
        });

        const npc1 = new GameObject({
            x:9,
            y:7,
            src:"/images/characters/people/npc1.png",
            useShadow:true
        });

        setTimeout(() => {
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        }, 200);


/*
        const x=4;
        const y=6;

        const shadow = new Image(); 
        shadow.onload=()=>{
            this.ctx.drawImage(shadow,0,0,32,32,x*16-8,y*16-18,32,32);
        }
        shadow.src= "/images/characters/shadow.png"*/

        /*const hero = new Image();

        hero.onload=()=>{
            this.ctx.drawImage(hero,0,0,32,32,x*16-8,y*16-18,32,32);
        };
        
        hero.src = "/images/characters/gwy_v2.png"*/
        
        
    }

}