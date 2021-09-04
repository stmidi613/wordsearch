const ALPHA = "abcdefghijklmnopqrstuvwxyz";

window.onload = function(){
    
    let words = ["time", "happy", "its"];
    let word = "";
    let wordArray = words.map(eachWord => eachWord.split(""));
    
    let arr = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7]
    ]
//This function checks to see if the word can fit inside the puzzle.  
//We are assuming the crossword is a perfect square.
    function canFit(word){
        return arr[0].length > word.length;
    }
//returns an array which contains objects
    function allPossiblePositions(word){
        if(canFit(word)){
           return arr.map(num => num.map((eachnum, index) => arr[0].length - word.length >= index ? num.slice(index, index + word.length) : ""));
        }
    }
    let test = arr.map(num => num.map(eachnum => eachnum));
    console.log(allPossiblePositions("time"))    
}
