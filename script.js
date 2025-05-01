const border = document.querySelector(".container");
const reset = document.getElementById("reset");
const sizeButton = document.getElementById("size");
let size = 16;
let individualSize = 25

const shading = document.getElementById("shading");
const colors = document.getElementById("colors");
const black = document.getElementById("black");

let shadingActive = false;
let colorsActive = false;
let blackActive = true;

black.classList.add("active");

shading.addEventListener("click", () => {
    shadingActive = true;
    colorsActive = false;
    blackActive = false;
    shading.classList.add("active");
    colors.classList.remove("active");
    black.classList.remove("active");
})

colors.addEventListener("click", () => {
    colorsActive = true;
    shadingActive = false;
    blackActive = false;
    shading.classList.remove("active");
    colors.classList.add("active");
    black.classList.remove("active");
})

black.addEventListener("click", () => {
    blackActive = true;
    colorsActive = false;
    shadingActive = false;
    shading.classList.remove("active");
    colors.classList.remove("active");
    black.classList.add("active");
})

function createGrid() {
    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        if (blackActive === true) {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = black
            })
        } else if (colorsActive === true) {
            div.addEventListener("mouseover", () => {
                let red = Math.floor(Math.random()*256)
                let green = Math.floor(Math.random()*256)
                let blue = Math.floor(Math.random()*256)
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            })
        } else if (shadingActive === true) {
            let moveCount = 0;
            let opacityAmmount = 0;
            div.addEventListener("mouseover", () => {
                moveCount +=1;
                div.style.backgroundColor = black;
                opacityAmmount = moveCount*0.1;
                div.style.opacity = opacityAmmount;
            })
        }
        div.classList.add("grid")
        div.style.width = `${individualSize}%`;
        div.style.height = `${individualSize}%`;
        border.appendChild(div);
        //style of "ink"
        
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
})


