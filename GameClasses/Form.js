class Form {
    constructor() {

    }
    display() {
        var title = createElement('h1')
        title.html("RACING CARs");
        title.position(400, 0);


        var input = createInput("Enter Name");
        input.position(130, 160);

        var button = createButton("PLAY");
        button.position(130, 190);

        /* when button pressed need to hide input box and PLAY button
            capture players name and update that in database.
            increase playercount in code and in database.

            we can display a greeting or welcome message to player till 
            all the 4 players join the Game

            we can display player information as well
        */

       button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });

    }
}