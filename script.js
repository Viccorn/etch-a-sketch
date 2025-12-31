

let container = document.querySelector(".container");

let btnAdd = document.querySelector(".btnAdd");


function createGrid() {
    let boxesPerRow;
    while (true) {
        boxesPerRow = prompt("How many boxes per side you want? (max 100) ", 4);
        if (boxesPerRow <= 100 && boxesPerRow > 0) {
            break;
        }
    }

    for (let i = 1; i <= (boxesPerRow * boxesPerRow); i++) {
        let temp = document.createElement("div");
        temp.style.backgroundColor = "white";
        temp.style.width = `calc(${100 / boxesPerRow}%)`;
        temp.style.aspectRatio = "1 / 1";
        container.appendChild(temp);
        temp.addEventListener('mouseover', function (e) {
            temp.style.backgroundColor = getRandomColor();

            setTimeout(() => {
                temp.style.backgroundColor = "white";
            }, 35000);
            // body
        });

    }

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



btnAdd.addEventListener('click', function (e) {
    container.textContent = '';
    createGrid();
});


