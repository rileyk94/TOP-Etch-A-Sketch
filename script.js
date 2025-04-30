const border = document.querySelector(".container");
for (let i = 1; i < 17; i++) {
    const div = document.createElement('div');
    div.classList.add("grid")
    draw(div);
    border.appendChild(div);
}

function draw(square) {
    square.addEventListener("mouseover", () => {
        square.classList.add("hover")
    })
    square.addEventListener("mouseout", () => {
        square.classList.remove("hover")
    })
}