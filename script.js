const container = document.querySelector(".container");

function createGrid() {
  // Clear any existing grid
  container.innerHTML = "";

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  container.appendChild(gridContainer);

  // Prompt the user for the grid size
  const gridSize = parseInt(
    prompt("Enter the number of rows/columns for the grid:")
  );

  // Set a CSS variable for grid size
  document.documentElement.style.setProperty("--grid-size", gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);

    let interactionCount = 0;

    gridSquare.addEventListener("mouseover", (e) => {
      const square = e.target;

      // Check if the square is already clicked (darkened)
      if (interactionCount === 0) {
        // Hover effect - Initial color
        square.style.backgroundColor = randomRGB();
      }
    });

    gridSquare.addEventListener("mouseout", (e) => {
      if (!clicked) {
        // Restore hover effect if not clicked
        e.target.style.backgroundColor = randomRGB();
      }
    });

    gridSquare.addEventListener("click", (e) => {
      const square = e.target;

      // Check if the square is already darkened
      if (interactionCount < 10) {
        interactionCount++;

        const currentColor =
          square.style.backgroundColor || "rgb(255, 255, 255)";

        // Parse the RGB components
        const rgbValues = currentColor.match(/\d+/g);
        const r = parseInt(rgbValues[0]);
        const g = parseInt(rgbValues[1]);
        const b = parseInt(rgbValues[2]);

        // Decrease each RGB component by 10%
        // 25.5 is 10% of 255
        const newR = Math.max(0, r - 25.5);
        const newG = Math.max(0, g - 25.5);
        const newB = Math.max(0, b - 25.5);

        // Apply the new color to the square
        square.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
      }
    });
  }
}

function randomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgbColor = "rgb(" + r + "," + g + "," + b + ")";
  return rgbColor;
}

createGrid();
