function getRGB(string) {
    if (!string){string = "rgb(255,255,255)"};
    //if (!string || string === "rgb(0, 0, 0)"){string = "rgb(255,255,255)"};
    let numbers = string.replaceAll(/([/()rgb])/g, "");
    let rgbArray = numbers.split(",");
    return rgbArray;
};

function randomizeColor(block) {
    const rgbArray = getRGB(block.style.backgroundColor);
    let r = Math.floor((Math.random() * (50 - 0 + 1) + 0) * redRatio);
    let g = Math.floor((Math.random() * (50 - 0 + 1) + 0) * greenRatio);
    let b = Math.floor((Math.random() * (50 - 0 + 1) + 0) * blueRatio);
    rgbArray[0] = rgbArray[0] - r;
    rgbArray[1] = rgbArray[1] - g;
    rgbArray[2] = rgbArray[2] - b;
    block.style.backgroundColor = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
    block.style.borderColor = block.style.backgroundColor;
};

function makeGame(howManyBlocks){
    const gameContainer = document.getElementById("etchASketchContainer");
    while (gameContainer.firstChild) {
        gameContainer.removeChild(gameContainer.lastChild);
      }
    var docFrag = document.createDocumentFragment();

    for (i=0; i<howManyBlocks; i++){
        var div = document.createElement("div");
        div.className = "gameRow";

        docFrag.appendChild(div);
    };
    gameContainer.appendChild(docFrag);
    const rows = document.querySelectorAll(".gameRow");
    const totalWidth = getComputedStyle(gameContainer).width.replace("px","");
    console.log(totalWidth)
    const squareSides = (totalWidth - (howManyBlocks * 2))/howManyBlocks;
    rows.forEach(element => {
        for (i=0; i<howManyBlocks; i++){
            var square = document.createElement("div");
            square.className = "gameBlock";
            square.style.width = `${squareSides}px`;
            square.style.height = `${squareSides}px`;
            square.style.margin = "1px";
            element.appendChild(square);
        };
    });
    const blocks = document.querySelectorAll(".gameBlock");
    blocks.forEach(block => {block.addEventListener("mouseover", function(){randomizeColor(this)})});
};

let gameSize = 16;
let redRatio = 1;
let greenRatio = 1;
let blueRatio = 1;


document.getElementById("gameSizeSlider").oninput = function(){
    gameSize = this.value;
    document.getElementById("gameSizeValue").textContent = `${this.value}x${this.value}`;
    makeGame(gameSize);
};

document.getElementById("redRatioSlider").oninput = function(){
    let rawRatio = this.value;
    document.getElementById("redRatioValue").textContent = `${rawRatio}%`;
    redRatio = 1-(rawRatio/100);
};

document.getElementById("greenRatioSlider").oninput = function(){
    let rawRatio = this.value;
    document.getElementById("greenRatioValue").textContent = `${rawRatio}%`;
    greenRatio = 1-(rawRatio/100);
};

document.getElementById("blueRatioSlider").oninput = function(){
    let rawRatio = this.value;
    document.getElementById("blueRatioValue").textContent = `${rawRatio}%`;
    blueRatio = 1-(rawRatio/100);
};

document.getElementById("clearButton").onclick = function(){
    makeGame(gameSize);
};

makeGame(gameSize);


