const border = document.querySelector(".container");
const reset = document.getElementById("reset");
const sizeButton = document.getElementById("size");
let size = 16;
let individualSize = 25




function createGrid() {
    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.classList.add("grid")
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
        div.style.width = `${individualSize}%`;
        div.style.height = `${individualSize}%`;
        border.appendChild(div);
        const grid = document.querySelectorAll(".grid")
        reset.addEventListener("click", () => {
            grid.forEach(div => {
                div.style.backgroundColor = "aquamarine";
            })  
        })
    }
}

createGrid()


sizeButton.addEventListener("click", () => {
    const grid = document.querySelectorAll(".grid")
    grid.forEach(div => {
        border.removeChild(div)
    })
    let correctInput = false;
    while (correctInput === false) {
        let side = prompt("Enter a side length (Max 100): ");
        if (side !== null) {
            let sideLength = Number(side);
            console.log(sideLength)

            if (!isNaN(sideLength)) {
                if (sideLength <= 100 && sideLength > 0) {
                    size = sideLength*sideLength;
                    individualSize = 100/sideLength;
                    correctInput = true;
                }
            } 
        }
        if (correctInput === false) {
            alert("Incorrect Input, please try again")
        }
    }
    createGrid()
    reset.addEventListener("click", () => {
        grid.forEach(div => {
            div.style.backgroundColor = "aquamarine";
        })  
    })
})


