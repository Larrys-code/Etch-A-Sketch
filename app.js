function getRGB(string) {
    if (!string){string = "rgb(255,255,255)"};
    //if (!string || string === "rgb(0, 0, 0)"){string = "rgb(255,255,255)"};
    let numbers = string.replaceAll(/([/()rgb])/g, "");
    let rgbArray = numbers.split(",");
    return rgbArray;
};

function randomizeColor(block) {
    const rgbArray = getRGB(block.style.backgroundColor);
    let r = Math.floor(Math.random() * (50 - 0 + 1) + 0);
    let g = Math.floor(Math.random() * (50 - 0 + 1) + 0);
    let b = Math.floor(Math.random() * (50 - 0 + 1) + 0);
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

makeGame(16);


