var canvasSize = 750;
var sizeInput, button;
function setup() {
  var canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('canvas');
  sizeInput = createInput(8,'text');
  sizeInput.parent('input-text');
  sizeInput.addClass('form-control');
  sizeInput.id('sizeInput');
  sizeInput.attribute('placeholder', 'Board size');
  button = createButton('Submit');
  button.parent('input');
  button.mousePressed(resetSketch);
  button.addClass('btn btn-secondary mb-2');
  button.id('submit');

  var input = document.getElementById('sizeInput');
  input.addEventListener("keyup", function (event) {
    event.preventDefault();
    console.log('fire');
    if (event.keyCode === 13) {
      resetSketch();
    }
  });
  resetSketch();

  for (var i = 7; i <= 300; i+=8) {
    board = new SquareBoard(i);
    board.solve();
    console.log(`${i}: ${board.path.length} => ${board.path.length === i * i}`);
  }
}

function resetSketch() {
  var error = document.getElementById('error');
  var value = parseInt(sizeInput.value());
  // console.log(value);
  if(isNaN(value)) { error.innerHTML = "Invalid input!"; return; }
  else if(value >= 250) { error.innerHTML = "Too big!"; return; }
  else { error.innerHTML = ""; }
  clear();
  var boardSize = parseInt(value);
  board = new SquareBoard(boardSize);
  board.draw();
  board.solve();
  board.drawPath();
}

function draw() {}