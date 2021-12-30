class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
    });
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40,50); 
    form.titleImg.class("gameTitleAfterAffect"); 
    this.resetTitle.html("ResetGame"); 
    this.resetTitle.class("resetText"); 
    this.resetTitile.position(width/2 + 200,40); 
    this.resetButton.class("ResetButton");
    this.resetButton.position(width/2 + 230,100); 
    this.leaderboardTitle.html("leaderboard"); 
    this.leaderboardTitle.class("resetText");
    this.leaderboardTitle.position(width/3- 60,40); 
    this.leader1.class("leadersText"); 
    this.leader1.position(width/3 -50,80); 
    this.leader2.class("leadersText"); 
    this.leader2.position(width/3 - 50, 130); 
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
