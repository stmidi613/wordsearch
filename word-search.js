const ALPHA = "abcdefghijklmnopqrstuvwxyz";

window.onload = function(){
    
    let words = ["time", "happy", "its", "great"];
    let word = "";
    let wordArray = words.map(eachWord => eachWord.split(""));
    let newArray = [];
    let subArray = [];
    let subArray2 = [];
    let fullArr = [];

    let arr = [
        [0, 0, 0, 0, "t", 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3],
        [4, "t", 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, "t"]
    ]
//This function checks to see if the word can fit inside the puzzle.  
//We are assuming the crossword is a perfect square.
    function canFit(word){
        return arr[0].length > word.length;
    }
//This finds all the places the word can fit horizontally.
    function canFitHorizontally(word){
        return arr.map((num, i) => 
                num.map((eachnum, index) => arr[0].length - word.length >= index 
                        && num.slice(index, index + word.length)
                    .every((item, index) => /\d+/.test(item) || item === word[index]) ? 
                    newArray.push([i, index, "horizontal"]) : "")
            );
    }
//This finds all the places the word can fit vertically.
    function canFitVertically(word){
        subArray = arr.map((num, i) => 
                    num.map((eachNum, index) => arr[index][i])      
        );
        return subArray.map((num, i) => 
                num.map((eachnum, index) => arr.length - word.length >= index 
                        && num.slice(index, index + word.length)
                    .every(item => /\d+/.test(item) || item === word[index]) ? 
                    newArray.push([index, i, "vertical"]) : "")
        );
    }
//This finds all the places the word can fit diagonally.
function canFitDiagonally(word){
    subArray = arr.map((num, i) => 
                num.map((eachNum, index) => i + index < arr.length ? 
                arr[index][index + i] : "")
    );
    subArray2 = arr.map((num, i) => 
    num.map((eachNum, index) => i + index < arr.length ? 
    arr[index + i][index] : "") 
    );
    fullArr = subArray.concat(subArray2).slice(1).map(arr => arr.filter(num => /\w+/.test(num)));
        fullArr.map((num, i) => 
            num.map((eachnum, index) => arr[0].length - word.length >= index 
                    && num.slice(index, index + word.length)
                .every(item => /\d+/.test(item) || item === word[index]) ? 
                newArray.push([num[0], index, "diagonal"]) : "")
    );
}
//returns an array which contains objects
    /*function allPossiblePositions(word){
        if(canFit(word)){
           return arr.map(num => num.filter((eachnum, index) => arr[0].length - word.length >= index && num.slice(index, index + word.length).every(item => /[0-9]/.test(item))));
        }
    }*/
    let test = arr.map(num => num.map(eachnum => eachnum));
    console.log(canFitHorizontally("time"))
    console.log(newArray)
    console.log(canFitVertically("time"))
    console.log(canFitDiagonally("time"))
    console.log(fullArr)
}

