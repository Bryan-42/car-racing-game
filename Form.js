class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h1");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      Player.update(name);
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + player.name);
      greeting.position(130, 160);
    });

  }
}