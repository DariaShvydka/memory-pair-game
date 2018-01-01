//list of class names for the «color» array
var colors = [];
for (var i = 0; i < 10; i++) {
  colors.push('square-' + i);
}

//object of game-square
function GameSquare(el, color) {
  this.el = el;
  this.isOpen = false;
  this.isLocked = false;
  this.el.addEventListener("click", this, false);
  this.setColor(color);
}

// handleEvent
GameSquare.prototype.handleEvent = function(e) {
  switch (e.type) {
    case "click":
      if (this.isOpen || this.isLocked) {
        return;
      }
      this.isOpen = true;
      this.el.classList.add('flip');
      checkGame(this);
  }
}

// reset
GameSquare.prototype.reset = function() {
  this.isOpen = false;
  this.isLocked = false;
  this.el.classList.remove('flip');
}

// lock
GameSquare.prototype.lock = function() {
  this.isLocked = true;
  this.isOpen = true;
}

//setColor
GameSquare.prototype.setColor = function(color) {
  this.el.children[0].children[1].classList.remove(this.color);
  this.color = color;
  this.el.children[0].children[1].classList.add(color);
}

//array of game squares
var gameSquares = [];

//creating a new GameSquare and initialize each with a a DOM element and a color
function setupGame() {
  var array = document.getElementsByClassName("game-square");
  var randomColors = getSomeColors();            
  for (var i = 0; i < array.length; i++) {  
    var index = random(randomColors.length);     
    var color = randomColors.splice(index, 1)[0];
    gameSquares.push(new GameSquare(array[i], color));
  }
}
setupGame();

//shuffle array
function random(n) {
  return Math.floor(Math.random() * n);
}

//pickout 8 color pairs at random and make an array with two copies of each color
function getSomeColors() {
  var colorscopy = colors.slice();
  var randomColors = [];
  for (var i = 0; i < 8; i++) {
    var index = random(colorscopy.length);
    randomColors.push(colorscopy.splice(index, 1)[0]);
  }
  return randomColors.concat(randomColors.slice());
}

//keep track of the first square where was click
var firstSquare = null;

//comparing cliked cards
function checkGame(gameSquare) {
  if (firstSquare === null) {
    firstSquare = gameSquare;
    return
  }

  if (firstSquare.color === gameSquare.color) {
    firstSquare.lock();
    gameSquare.lock();
  } else {
    var a = firstSquare;
    var b = gameSquare;
    setTimeout(function() {
      a.reset();
      b.reset();
      firstSquare = null;
    }, 400);
  }
  firstSquare = null;
}

//close all squares and randomize all colors
function clearGame() {
  gameSquares.forEach(function(gameSquare) {
  gameSquare.reset();
  });
  setTimeout(function() {
    randomizeColors();
  }, 500);
}

//assign button
var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  clearGame()
});

//assign new colors after randomize
function randomizeColors() {
  var randomColors = getSomeColors();
  gameSquares.forEach(function(gameSquare) {
    var color = randomColors.splice(random(randomColors.length), 1)[0];
    gameSquare.setColor(color);
  });
}

