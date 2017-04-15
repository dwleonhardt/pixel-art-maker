
// art time
var currentColor = '';
var current = document.getElementsByClassName('current')[0];
function newColor() {
  currentColor = event.target.style.backgroundColor;
  current.style.backgroundColor = currentColor;
}
  var body = document.getElementsByTagName("body")[0];
  var container = document.createElement("div");
  container.className = 'container';
  // container.style.border = '4px solid black';
  container.style.margin = '0 auto';
  container.style.width = '793px';
  container.style.height = '486px';
  body.appendChild(container);
  for (var i = 1; i < 1189; i++) {
    var tile = document.createElement("div");
    tile.style.float = 'left';
    tile.style.width = '16px';
    tile.style.paddingBottom = '16px';
    tile.addEventListener('mouseenter', paint);
    tile.addEventListener('click', clickPaint);
    container.appendChild(tile);
    tile.style.backgroundColor = 'white';
    tile.style.border = '1px solid grey';
  }
// event

  // container.addEventListener('click', function (event){
  //   event.target.style.backgroundColor = currentColor || '#F0F0F0';
  // });

// color selector
var colorCont = document.createElement('div');
colorCont.className = 'colorCont';
colorCont.style.margin = '0 auto';
colorCont.style.width = '793px';
colorCont.style.height = '100px';
// colorCont.style.backgroundColor = 'black';
colorCont.style.border = '4px solid black';
body.appendChild(colorCont);

var colors = ['red', 'yellow', 'orange', 'green', 'blue', 'purple', 'brown'];
for (var i = 0; i < colors.length; i++) {
  var select = document.createElement('div');
  select.style.float = 'left';
  select.style.border = '3px solid white';
  select.style.width = '12%';
  select.style.height = '90%';
  select.style.marginLeft = '2px';
  select.style.borderRadius = '50%';
  select.style.cursor = 'pointer';
  select.style.boxShadow = '8px 5px rgba(0, 0, 0, 0.3)';
  select.style.backgroundColor = colors[i];
  select.addEventListener('click', newColor);
  select.addEventListener('click', brush);
  colorCont.appendChild(select);
}
// events
var mouseState = false;
function clickPaint() {
    event.target.style.backgroundColor = currentColor || 'white';
}
function paint() {
  container.addEventListener('mousedown', function() {
    mouseState = true;
  });
  body.addEventListener('mouseup', function() {
    mouseState = false;
  });
  if (mouseState === true) {
    event.target.style.backgroundColor = currentColor || 'white';
  }
}
var drawing = document.createElement("div");
drawing.className = 'drawing1';
body.appendChild(drawing);

// eraser
var eraser = document.getElementsByClassName('eraser')[0];
eraser.addEventListener('mousedown', function() {
  currentColor = 'white';
  body.className = 'eraserCursor';
});

var bodyClass = document.getElementsByClassName('eraserCursor');


function brush() {
  body.className = 'brushCursor';
}
