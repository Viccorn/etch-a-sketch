
let temp;
let container = document.querySelector(".container");


for (let i = 1; i <= 16; i++) {
    temp = document.createElement("div");
    temp.className = "gridBox";
    container.appendChild(temp);

}