class Overworld{

    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop(){
        const step = ()=>{
            //clean map
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
            //lower map
            this.map.drawLowerMap(this.ctx);
            //game objects here
            Object.values(this.map.gameObjects).forEach(object=>{
                object.update({
                    arrow: this.directionInput.getDirection(),
                });
                //console.log(this.directionInput.getDirection());
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
        this.map = new OverworldMap(window.OverworldMap.Room);
        console.log("map",this.map);
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();

    }

}