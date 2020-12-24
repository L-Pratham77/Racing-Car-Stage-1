class Game {
    constructor(){}
    start(){
        if(GameState===0){
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }
    }
}