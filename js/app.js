// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y + 55;
    this.speed = speed;
    this.step = 101;
    this.wall = this.step * 5;
    this.bugReset = -this.step;
    this.sprite = 'images/enemy-bug.png';
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    
    if (this.x < this.wall) {
       this.x += this.speed * dt;
    }else{
        this.x = this.bugReset;
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
const enemy1 = new Enemy(-101, 0, 150);
const enemy2 = new Enemy(-101, 83, 250);
const enemy3 = new Enemy((-101*2), 166, 350);
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

class Hero { 
    constructor () {
      this.step = 101;
      this.jump = 83;
      this.beginX = this.step * 2;
      this.beginY = (this.jump * 4) + 55;
      this.x = this.beginX;
      this.y = this.beginY;
      this.sprite =  'images/char-boy.png';
       }

// This class requires an update(), render() and
    handleInput(key) {
        if (key === 'left'){
            if (this.x > 0){
            this.x -= this.step;
        } else {
            this.x += 0;
           }
        }
        
        if (key === 'up'){
            if (this.y > 0){
            this.y -= this.jump;
        } else {
            this.y += 0;
          }
        }

        if (key === 'right'){
            if (this.x < this.step * 4){
            this.x += this.step;
        } else {
            this.x += 0;
          }
        }

        if (key === 'down'){
            if (this.y < this.jump * 4){
            this.y += this.jump;
        } else {
            this.y += 0;
          }
        }
    } 

    render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
    }

    update() {
        for(let enemy of allEnemies) {
            if(this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
            alert('collide');
            }
           //console.log(this.y, enemy.y);
        }
    }
}
const player = new Hero();
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
