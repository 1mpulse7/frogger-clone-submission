'use strict';
// Place all enemy objects in an array called allEnemies
const allEnemies = [];

let score = 0;
const scoreDisplay = document.querySelector('.score');

class Enemy {
  constructor(posY, posX, sp) {
    this.x = posX;
    this.sprite = 'images/enemy-bug.png';
    this.y = posY;
    allEnemies.push(this);
    this.speed = sp;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  update(dt) {
    if (this.x < 505) {
      this.x += (dt * this.speed);
    } else if (this.x >= 505) {
      this.x = -100;
    }
  }
}



/* Now write your own player class
This class requires an update(), render() and
a handleInput() method.
As suggested by Mathew Cranford in his third article, I wrote a hero constructor
class using the information provided above */
class Hero {
  constructor() {
    this.x = -2;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
//was initially trying to test the key code instead of the string
//with the help of a Mathew Cranford tutorial
  handleInput(event) {
    if (event == 'left' && this.x > 0) {
      this.x -= 101;
    } else if (event == 'up' && this.y > 0) {
      this.y -= 83;
    } else if (event == 'right' && this.x < 400) {
      this.x += 101;
    } else if (event == 'down' && this.y < 400) {
      this.y += 83;
    }
  }

  playerReset() {
    setTimeout(function() {
      player.x = -2;
      player.y = 400;
    }, 500);
  }
};





//class for points using star images

class StarCreator {
  constructor() {
    this.y = -15;
    this.x = 402;
    this.sprite = 'images/Star.png';
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
//function to repostion star upon capture, and add points to the board
//also checks to see if player is on the water
  starCheck() {
    if (player.x == star.x && player.y == star.y) {
      score += 150;
      player.x = -2;
      player.y = 400;
    } else if (player.x != star.x && player.y == star.y) {
      player.playerReset();
    }
  }
}


// Now instantiate your objects.
// Place the player object in a variable called player

const player = new Hero();

const star = new StarCreator();

/* stone bug variable names are set up to have the first number referencing
which row of stone its on, ie stoneBugOneOne is in the first row, and is the
first bug declared for that row */

const stoneBugOneOne = new Enemy(234, 250, 300);

const stoneBugTwoOne = new Enemy(151, 50, 250);

const stoneBugThreeOne = new Enemy(68, -190, 250);

const stoneBugOneTwo = new Enemy(234, -100, 300);

//because there is only one grass row, its implied all grass bugs are on the
//same row.

const grassBugOne = new Enemy(317, 25, 225);




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

//sought help with if statement parameters from slack handle @Roderick's tutorial

function checkCollisions() {
  allEnemies.forEach(function(enemy) {
    if (player.y == enemy.y && player.x <= enemy.x + 30 && player.x >= enemy.x - 30) {
      player.x = -2;
      player.y = 400;
      score -= 300;
    }
  });
}

//score function, updates scores and lives
function scoreUpdate() {
  scoreDisplay.innerText = ("Score: " + score);
}
