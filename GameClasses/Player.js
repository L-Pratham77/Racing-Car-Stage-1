class Player {
    constructor() {

    }
    //to get playerCOunt from database
    getCount() {
        var playersRef = database.ref('playerCount');
        playersRef.on("value", function(data){
            playerCount = data.val()
        });
    }

    //to update playerCOunt in database    
    updateCount(count){
        database.ref('/').update({playerCount : count})
    }

    
    //to update player name in database  player1, player2
        update(name){
            var playerIndex = "player" + playerCount;
            database.ref(playerIndex).set({name : name});
        }
}