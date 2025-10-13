const RedBtn = document.getElementById("red")
const NormalBtn = document.getElementById("normal")
const paragraph = document.getElementById("text");
paragraph.style.color = "blue";
paragraph.style.fontSize = "24px";
let size = 24
function changeBtn() {
    size += 12
    paragraph.style.color = "red";
    paragraph.style.fontWeight = "bold";
    paragraph.style.fontSize = `${size}px`;
}

function changeBack() {
    paragraph.style.color = "blue";
    paragraph.style.fontWeight = "";
    paragraph.style.fontSize = "24px"
}

RedBtn.addEventListener("click", changeBtn)
NormalBtn.addEventListener("click", changeBack)
