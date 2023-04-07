const gameContainer = document.getElementById("etchASketchContainer");
var docFrag = document.createDocumentFragment();

for (i=0; i<16; i++){
    var div = document.createElement("div");
    div.className = "gameRow";

    docFrag.appendChild(div);
};
gameContainer.appendChild(docFrag);
const rows = document.querySelectorAll(".gameRow");
rows.forEach(element => {
    for (i=0; i<16; i++){
        var square = document.createElement("div");
        square.className = "gameBlock";
        element.appendChild(square);
    };
});
