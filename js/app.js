// Place all enemy objects in an array called allEnemies
let allEnemies = [];

class Enemy {
  constructor(posY, posX) {
    this.x = posX;
    this.sprite = 'images/enemy-bug.png';
    this.y = posY;
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
As suggested by Mathew Cranford in his article, I wrote a hero constructor
class using the information provided above */
class Hero {
  constructor() {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png'
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key) {
    if (key == 38) {
      this.y += 100;
      console.log('left');
    } else if (key == 37) {
      this.x -= 100;
      console.log('up');
    } else if (key == 39) {
      this.x += 100;
      console.log('right');
    } else if (key == 40) {
      this.y -= 100;
      console.log('down');
    }
  }
}

Hero.prototype.update = function() {
  
}




// Now instantiate your objects.
// Place the player object in a variable called player
const player = new Hero();

// enemy objects instantiated and pushed to allEnemies array, come back and fine tune

/* stone bug variable names are set up to have the first number referencing
which row of stone its on, ie stoneBugOneOne is in the first row, and is the
first bug declared for that row */

const stoneBugOneOne = new Enemy(225, 250);

const stoneBugTwoOne = new Enemy(140, 50)

allEnemies.push(stoneBugOneOne);
allEnemies.push(stoneBugTwoOne);

//because there is only one grass row, its implied all grass bugs are on the
//same row.

const grassBugOne = new Enemy(300, 0);

allEnemies.push(grassBugOne);



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
