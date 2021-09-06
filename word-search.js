const ALPHA = "abcdefghijklmnopqrstuvwxyz";

window.onload = function(){
    
    let words = ["time", "happy", "its"];
    let word = "";
    let wordArray = words.map(eachWord => eachWord.split(""));
    let newArray = [];

    let arr = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, "m", 7, 7, 7, 7, 7]
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
                .every(item => /\d+/.test(item)) ? newArray.push([i, index, "horizontal"]) : ""
                )
            );
    }
//This finds all the places the word can fit vertically.
    function canFitVertically(word){
        return arr.map((num, i) => 
                    num.map((eachNum, index) => 
                    arr[index][i]
        ));
    }
//returns an array which contains objects
    function allPossiblePositions(word){
        if(canFit(word)){
           return arr.map(num => num.filter((eachnum, index) => arr[0].length - word.length >= index && num.slice(index, index + word.length).every(item => /[0-9]/.test(item))));
        }
    }
    let test = arr.map(num => num.map(eachnum => eachnum));
    console.log(canFitHorizontally("time"))
    console.log(newArray)
    console.log(arr[0][2])
    console.log(canFitVertically("time"))   
}
