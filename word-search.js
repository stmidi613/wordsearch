const ALPHA = "abcdefghijklmnopqrstuvwxyz";

window.onload = function(){
    
    let words = ["time", "happy", "its"];
    let word = "";
    let wordArray = words.map(eachWord => eachWord.split(""));
    const columns = document.querySelectorAll('tr');
    const cells = document.querySelectorAll('td');
    console.log(document.querySelector("tr"))
    cells.forEach(cell => {
        cell.innerText =  ALPHA[Math.floor((Math.random() * 26))];
    })
    
    function placeVertically(word){
        const startingCell = cells[Math.floor(Math.random() * cells.length)];
        const cellCoordinatesRow = startingCell.parentElement.rowIndex;
        const cellCoordinatesColumn = startingCell.cellIndex;
        return word.forEach((letter, index) => 
        cellCoordinatesColumn + word.length <= columns.length ?  
        columns[cellCoordinatesRow].cells[cellCoordinatesColumn + index].innerText = letter
        : columns[cellCoordinatesRow].cells[cellCoordinatesColumn - index].innerText = letter);
    }
    //The columns.length is used because it is assumed the number of columns and rows are equal.
    function placeHorizontally(word){
        const startingCell = cells[Math.floor(Math.random() * cells.length)];
        const cellCoordinatesRow = startingCell.parentElement.rowIndex;
        const cellCoordinatesColumn = startingCell.cellIndex;
        return word.forEach((letter, index) => 
        cellCoordinatesRow + word.length <= columns.length ?
        columns[cellCoordinatesRow + index].cells[cellCoordinatesColumn].innerText = letter
        : columns[cellCoordinatesRow - index].cells[cellCoordinatesColumn].innerText = letter);
    }

    function placeDiagonally(word){
        const startingCell = cells[Math.floor(Math.random() * cells.length)];
        const cellCoordinatesRow = startingCell.parentElement.rowIndex;
        const cellCoordinatesColumn = startingCell.cellIndex;
        return word.forEach((letter, index) => 
        //Starting cell is in the top left of graph.
        cellCoordinatesColumn + word.length <= columns.length &&
        cellCoordinatesRow + word.length <= columns.length ?
        columns[cellCoordinatesRow + index].cells[cellCoordinatesColumn + index].innerText = letter :
        //Starting cell is in the top right of graph.
        cellCoordinatesColumn + word.length >= columns.length &&
        cellCoordinatesRow + word.length <= columns.length ?
        columns[cellCoordinatesRow + index].cells[cellCoordinatesColumn - index].innerText = letter :
        //Starting cell is in the bottom left of graph.
        cellCoordinatesColumn + word.length <= columns.length &&
        cellCoordinatesRow + word.length >= columns.length ?
        columns[cellCoordinatesRow - index].cells[cellCoordinatesColumn + index].innerText = letter :
        //Staring cell is in the bottom right of graph.
        columns[cellCoordinatesRow - index].cells[cellCoordinatesColumn - index].innerText = letter);
        }
    
    function wordPlacement(word){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            placeVertically(word)
            break;
        case 1:
            placeHorizontally(word)
            break;
        case 2:
            placeDiagonally(word)
            break;
        }
    }
    
    /*document.getElementById("answers").onclick = function(){
        startingCell.style.borderColor = "red";
    }*/

    return wordArray.forEach(word => wordPlacement(word));
}

