// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    /*var obj = Object.create(Enemy.prototype);
    obj.x = x;
    obj.y = y;*/
    var w = 40;
    var h = 40;
    this.width = w;
    this.height = h;
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
    this.x = this.x + Math.floor(((Math.random() * 350) + 1) * dt);
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

player.prototype.update = function(dt){
	player.handleInput();
	collision();
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
var length = Math.floor(Math.random() * 130);
for(i=0; i < length; i++){
	allEnemies.push(new Enemy(Math.floor(Math.random() * -5800) + 1,Math.floor(Math.random() * 240)));
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

//Collision Detection
var collision = function(){

	for (var i=0; i<allEnemies.length; i++){

		if(player.x < allEnemies[i].x + allEnemies[i].width &&
			player.x + player.width > allEnemies[i].x &&
			player.y < allEnemies[i].y + allEnemies[i].height &&
			player.height + player.y > allEnemies[i].y){
			console.log('Collision Detected!');
		};
	};
}


/*while (player.y<0){
	allEnemies.push(new Enemy(Math.floor(Math.random() * 800) - 1000,Math.floor(Math.random() * 240) + 0));
};*/
