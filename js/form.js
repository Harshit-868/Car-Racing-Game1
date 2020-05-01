class Form {
    constructor() {

    }
    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(150, 0);
        var input = createInput("Enter your name");
        input.position(150, 160);
        var button = createButton("Submit");
        button.position(150, 200);
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.updateCount(playerCount);
            player.updateName(name);
            var greeting = createElement('h2');
            greeting.html("Hello, " + name + "! Welcome to the game");
            greeting.position(130, 160);
        })
    }
}