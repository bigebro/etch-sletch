const eraserBtn = document.querySelector(".erase");
const resetbtn = document.querySelector(".reset");
const blackBtn = document.querySelector(".black");

function buildGrid(x, y, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;
    let isBlack = true;


    let squares = new DocumentFragment();

    for (let i = 0; i < x * y; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        squares.appendChild(square);
    }

    gridElement.appendChild(squares);
}

function setColor(color) {
    const square = document.querySelectorAll("div");
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseover", function(e) {
            if (color == "black") {
                e.target.style.backgroundColor = "black";
            } else {
                e.target.style.backgroundColor = "white";
            }
        });
    }
}

eraserBtn.addEventListener("click", () => {
    let color = "erase";
    setColor(color);
});

blackBtn.addEventListener("click", () => {
    let color = "black";
    setColor(color);
});


resetbtn.addEventListener("click", clear);

function clear() {
    const allDivs = document.querySelectorAll(".square");
    allDivs.forEach((allDivs) => {
        allDivs.style.backgroundColor = "white";
    });
}


let color = "black";
setColor(color);
buildGrid(16, 16, 26, document.querySelector("#container"));