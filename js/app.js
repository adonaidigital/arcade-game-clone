'use strict';
// Enemies our player must avoid
class Enemy {
      constructor (x, y, speed) {
        this.x = x;
        this.y = y + 55;
        this.speed = speed;
        this.step = 101;
        this.wall = this.step * 5;
        this.bugReset = -this.step;
        this.sprite = 'images/Rock.png';
    }
    //To Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // To Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        if (this.x < this.wall) {
            this.x += this.speed * dt;
         }else{
            this.x = this.bugReset;
         }
       }
    //allEnemies = [...Array(5)].map((_,i) => new Enemy(0,i+1));
    }
    // Variables applied to each of our instances go here
    // Place all enemy objects in an array called allEnemies
    const allEnemies = [
        new Enemy(-101, 0, 150),
        new Enemy(-101, 83, 200),
        new Enemy((-101*2), 166, 350),
        new Enemy(-101, 83, 250)
        ];
        allEnemies.push(new Enemy);

// This my player(Hero) object
class Hero { 
      constructor () {
        this.step = 101;
        this.jump = 83;
        this.beginX = this.step * 2;
        this.beginY = (this.jump * 5) - 28;
        this.x = this.beginX;
        this.y = this.beginY;
        this.sprite = 'images/char-boy.png';
        this.won = false;
        }

// This method handles the input
    handleInput(key) {
        if (key === 'left'){
            if (this.x > 0){this.x -= this.step;}
            else {this.x += 0;}  
        }
        
        if (key === 'up'){
            if (this.y > 0){this.y -= this.jump;}
            else {this.y += 0;} 
        }

        if (key === 'right'){
            if (this.x < this.step * 4){this.x += this.step;}
            else {this.x += 0;} 
        }

        if (key === 'down'){
            if (this.y < this.jump * 4){this.y += this.jump;}
            else {this.y += 0;}
        }
    } 

    //To draw the player on the screen
    render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
    }
    //To update player's position after collision
    update() {
        for(let enemy of allEnemies) {
                 if(this.y === enemy.y && 
                   (enemy.x + enemy.step/2 > this.x && 
                    enemy.x < this.x + this.step/2)) {
            //alert('collided')  this code is to checkCollision
              this.reset();
            }
            //console.log(this.y, enemy.y);
        }
        if(this.y === -28) {
            this.won = true; 
        }     
    }
    // Resets player to the starting point
    reset() {
        this.x = this.beginX;
        this.y = this.beginY; 
        }
   }
// Place the player object in a variable called player
const player = new Hero();
// Now instantiate your objects.

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', (e) => {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/*
Referenced 
Matthew Cranford Arcade Game Walkthrough Part 1-6, 
live webinar Arcade Game (P3) with Rodrick Bloomfield 
https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
*/