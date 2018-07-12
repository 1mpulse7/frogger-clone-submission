// Place all enemy objects in an array called allEnemies
let allEnemies = [];

let lives = 3;

class Enemy {
  constructor(posY, posX) {
    this.x = posX;
    this.sprite = 'images/enemy-bug.png';
    this.y = posY;
    allEnemies.push(this);
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

Enemy.prototype.update = function(dt) {
  if (this.x < 505) {
    this.x += (dt * 150);
  } else if (this.x > 505) {
    this.x = -100;
  }
}


/* Now write your own player class
This class requires an update(), render() and
a handleInput() method.
As suggested by Mathew Cranford in his third article, I wrote a hero constructor
class using the information provided above */
class Hero {
  constructor() {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png'
  };

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

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
  };
}

// this allows the game to update the player's position

Hero.prototype.update = function() {
  if (this.y < 10 ) {
    //idfk
  }
}





// Now instantiate your objects.
// Place the player object in a variable called player

const player = new Hero();

/* stone bug variable names are set up to have the first number referencing
which row of stone its on, ie stoneBugOneOne is in the first row, and is the
first bug declared for that row */

const stoneBugOneOne = new Enemy(225, 250);

const stoneBugTwoOne = new Enemy(140, 50)

const stoneBugThreeOne = new Enemy(60, -190);

const stoneBugOneTwo = new Enemy(225, -100)

//because there is only one grass row, its implied all grass bugs are on the
//same row.

const grassBugOne = new Enemy(300, 25);




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

// collision checker
/*if (player == enemy) {
  game restarts
}*/
