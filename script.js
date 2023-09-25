const container = document.querySelector('.container');

function createGrid() {
  // Clear any existing grid
  container.innerHTML= '';

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  container.appendChild(gridContainer);
  
  // Prompt the user for the grid size
  const gridSize = parseInt(prompt("Enter the number of rows/columns for the grid:"));
  
  
  // Set a CSS variable for grid size
  document.documentElement.style.setProperty('--grid-size', gridSize);
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
  }
}


