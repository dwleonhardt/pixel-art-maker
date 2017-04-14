
// art time
var currentColor = '';
function newColor() {
  currentColor = event.target.style.backgroundColor;
}
  var body = document.getElementsByTagName("body")[0];
  var container = document.createElement("div");
  container.style.border = '4px solid black';
  container.style.margin = '0 auto';
  container.style.width = '793px';
  container.style.height = '486px';
  container.style.backgroundColor = 'black';
  body.appendChild(container);
  for (var i = 1; i < 1189; i++) {
    var tile = document.createElement("div");
    tile.style.float = 'left';
    tile.style.width = '16px';
    tile.style.paddingBottom = '16px';
    container.appendChild(tile);
    tile.style.backgroundColor = '#F0F0F0';
    tile.style.border = '1px solid black';
  }
// event
  container.addEventListener('click', function (event){
    event.target.style.backgroundColor = currentColor;
  });

// color selector
var colorCont = document.createElement('div');
colorCont.style.margin = '0 auto';
colorCont.style.width = '793px';
colorCont.style.height = '100px';
colorCont.style.backgroundColor = 'black';
colorCont.style.border = '4px solid black';
body.appendChild(colorCont);
var colors = ['red', 'yellow', 'orange', 'green', 'blue', 'purple'];
for (var i = 0; i < colors.length; i++) {
  var select = document.createElement('div');
  select.style.float = 'left';
  select.style.border = '3px solid white';
  select.style.width = '12%';
  select.style.height = '90%';
  select.style.marginLeft = '2px';
  select.style.borderRadius = '50%';
  select.style.backgroundColor = colors[i];
  select.addEventListener('click', newColor);
  colorCont.appendChild(select);
}
