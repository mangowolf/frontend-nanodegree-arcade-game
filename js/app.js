// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    var w = 40;
    var h = 40;
    this.width = w;
    this.height = h;
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + Math.floor(((Math.random() * 350) + 10) * dt);
    this.y;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function(x,y){
	var w = 40;
	var h = 40;
	//load character sprite using helper
	this.width = w;
	this.height = h;
	this.sprite = 'images/char-boy.png';
	this.x = x;
	this.y = y;
}

//Update the player sprite position based on User input, win conditions, and collision conditions
player.prototype.update = function(dt){
	player.handleInput();
	player.reset();
};

//Render the player sprite
player.prototype.render = function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Handles the player sprite based on key pressed
player.prototype.handleInput = function(allowedKeys){
	switch(allowedKeys){
		case 'left':
		if(this.x > 0){
			this.x -= 100;
		};
		break;

		case 'up':
		if(this.y > 0){
			this.y -= 85;
		};
		break;

		case 'right':
		if(this.x < 400){
			this.x += 100;
		};
		break;

		case 'down':
		if(this.y < 300){
			this.y += 85;
		};
		break;
	};
};

//Resets the player to the initial position and generates more enemies
//if player wins or loses.
player.prototype.reset = function(){
	var winY = -45;
	if(this.y === winY){
		this.x = initialX;
		this.y = initialY;
		alert('Congratulations, you won!')
		constructEnemies();
	}
	else if(collision()){
		this.x = initialX;
		this.y = initialY;
		constructEnemies();
	};
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [];

//Creates fleet of enemies
var constructEnemies = function() {
var length = Math.floor(Math.random() * 50);
	for(i=0; i < length; i++){
		allEnemies.push(new Enemy(Math.floor(Math.random() * -5800) + 1, 210));
		allEnemies.push(new Enemy(Math.floor(Math.random() * -5800) + 1, 125));
		allEnemies.push(new Enemy(Math.floor(Math.random() * -5800) + 1, 40));
	};
};
constructEnemies()

var initialX = 200;
var initialY = 380;

//instantiates a new player character
var player = new player(initialX,initialY);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//Collision Detection between player and enemy objects
var collision = function(){

	for (var i=0; i<allEnemies.length; i++){

		if(player.x < allEnemies[i].x + allEnemies[i].width &&
			player.x + player.width > allEnemies[i].x &&
			player.y < allEnemies[i].y + allEnemies[i].height &&
			player.height + player.y > allEnemies[i].y){
			alert('Game Over!');
			return true;
		};
	};
};
