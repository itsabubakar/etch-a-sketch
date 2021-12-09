const gridContainer = document.querySelector(".sketch-container");
const grids = document.querySelector(".sketch-grid");
const btn = document.querySelector(".reset");
const gridCount = document.querySelector(".grid-count");
// const gridItem = document.querySelectorAll(".grid-item");

let startUp = 16;

btn.addEventListener('click', ()=> {
  let userStartUp = prompt();
  Usergrid(userStartUp);
})

function Usergrid(startUp) {
  grids.remove();
  if(gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.lastChild)
    let userGrid = document.createElement("div");
  userGrid.className = "sketch-grid";

  if(isNaN(startUp)) {
    startUp = 16
    console.log(startUp);
  } else if (startUp < 4 || startUp > 16 ) {
    console.log(startUp);
    startUp = 16;
    console.log(startUp);
  }

  gridCount.innerHTML = `<h3 class="grid-count">${startUp} x ${startUp}</h3>`

  for (let i = 0; i < startUp; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < startUp; j++) {
      let box = document.createElement("div");
      box.className = "grid-item";
      row.appendChild(box);
    }
    userGrid.appendChild(row);
    gridContainer.appendChild(userGrid)
  }
  userGrid.style.gridTemplateColumns = `repeat(${startUp}, 1fr)`;

  } else {
    let userGrid = document.createElement("div");
  userGrid.className = "sketch-grid";

  if(isNaN(startUp)) {
    startUp = 16
    console.log(startUp);
  } else if (startUp < 4 || startUp > 16 ) {
    console.log(startUp);
    startUp = 16;
    console.log(startUp);
  }

  gridCount.innerHTML = `<h3 class="grid-count">${startUp} x ${startUp}</h3>`

  for (let i = 0; i < startUp; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < startUp; j++) {
      let box = document.createElement("div");
      box.className = "grid-item";
      row.appendChild(box);
    }
    userGrid.appendChild(row);
    gridContainer.appendChild(userGrid)
  }
  userGrid.style.gridTemplateColumns = `repeat(${startUp}, 1fr)`;
  }
}


function grid() {

// let startUp = prompt();
console.log(startUp);


  if(isNaN(startUp)) {
    startUp = 16
    console.log(startUp);
  } else if (startUp < 4 || startUp > 16 ) {
    console.log(startUp);
    startUp = 16;
    console.log(startUp);
  }

  gridCount.innerHTML = `<h3 class="grid-count">${startUp} x ${startUp}</h3>`

  for (let i = 0; i < startUp; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < startUp; j++) {
      let box = document.createElement("div");
      box.className = "grid-item";
      row.appendChild(box);
    }
    grids.appendChild(row);
  }
  grids.style.gridTemplateColumns = `repeat(${startUp}, 1fr)`;
}

grid();


// const gridItem = document.querySelectorAll(".grid-item");

gridContainer.addEventListener('mouseover', function(e){
  let boxes = e.currentTarget.childNodes[1].childNodes;
  boxes.forEach((box)=> {
  let moreBox =  box.childNodes;
    moreBox.forEach((evenMoreBox)=> {
      evenMoreBox.addEventListener('mouseover', function(e){
        const fuckingBoxes = e.currentTarget;
        fuckingBoxes.style.backgroundColor = randomColor();
      })
    })
  })

})
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


function randomColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
};
return hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

console.log(4 + 4);


// things I want to work on
// I have the grid dynamically being created with prompt, im thinking of using forms but that'll involve rewriting my html

// I have to add the colouring functionality, I think I should focus on that now

// What i should add now to the grid is a button that runs the prompt again;
