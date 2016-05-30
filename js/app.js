// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    /*var obj = Object.create(Enemy.prototype);
    obj.x = x;
    obj.y = y;*/
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    //return obj;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + Math.floor((Math.random() * 800) + 1) * dt;
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

	//load character sprite using helper
	this.sprite = 'images/char-boy.png';
	this.x = x;
	this.y = y;
}

player.prototype.update = function(dt){
	player.handleInput();
};

player.prototype.render = function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.prototype.handleInput = function(allowedKeys){
	switch(allowedKeys){
		case 'left':
		this.x -= 100;
		//return this.x;
		break;

		case 'up':
		this.y -= 85;
		break;

		case 'right':
		this.x += 100;
		break;

		case 'down':
		this.y += 85;
		break;
	};
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var length = Math.floor(Math.random() * 20) + 2;
for(i=0; i < length; i++){
	allEnemies.push(new Enemy(Math.floor(Math.random() * 800) - 1000,Math.floor(Math.random() * 240) + 0));
};
var player = new player(200,380);


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
