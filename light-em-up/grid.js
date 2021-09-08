let position = 1; // The starting position of the grid
const gridSize =5000; // The total number of the grid cells

function createGrid() {
    for (let i=1; i<=gridSize; i++){
      var div = document.createElement("div");
      div.id = 'n' + i;
      div.innerText = i;
      document.getElementById("target").appendChild(div);
  }
}

  // Should increment the position variable by 1 each 100ms taking into consideration the gridSize variable value
  // This function should make use of the toggle function below to change the CSS class on a specific div element

function toggle(position){
  if(position < 1) return; 
  
  var r = Math.floor(255*(Math.random()));
  var g = Math.floor(255*(Math.random()));
  var b = Math.floor(255*(Math.random()));        
  var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  
  const name = 'n' + position; 
  const element = document.getElementById(name); 
  element.style.backgroundColor = color;
  element.classList.toggle('on');
}

function move(){
  setTimeout(() => {
      if (position > 200) return;
      toggle(position);
      toggle(position-1);                                
      position += 1;
      move();
  }, 100);
}
