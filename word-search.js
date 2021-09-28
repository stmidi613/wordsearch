const ALPHA = "abcdefghijklmnopqrstuvwxyz";

window.onload = function(){
    
    let words = ["happy", "happy", "happy"];
    let allPossiblePositions = [];
    let subArray = [];
    let verticalArray = [];
    let finalArray = [];
    let column = 8;
    let row = 8;
    let cells = [];

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


//This finds all the places the word can fit horizontally.
    function canFitHorizontally(word){
        arr.map((num, i) => 
                num.map((eachnum, index) => arr[0].length - word.length >= index
                       && num.slice(index, index + word.length)
                    .every((item, ind) => /\d/.test(item) || item === word[ind]) ? 
                 allPossiblePositions.push([i, index, "horizontal"]) : "")
            );
        finalArray = allPossiblePositions[Math.floor(Math.random() * allPossiblePositions.length)];
        return insertWord(finalArray, word);
    }
//This finds all the places the word can fit vertically.
    function canFitVertically(word){
        verticalArray = arr.map((num, i) => num.map((eachnum, index) => arr[index][i]));
        arr.map((num, i) => 
                num.map((eachnum, index) => arr.length - word.length >= index
                        && verticalArray[i].slice(index, index + word.length)
                    .every((item, ind) => /\d/.test(item) || item === word[ind]) ? 
                    allPossiblePositions.push([index, i, "vertical"]) : "")
        );
        finalArray = allPossiblePositions[Math.floor(Math.random() * allPossiblePositions.length)];
        return insertWord(finalArray, word);
    }
    
    function insertWord(array, word){
        if(array[2] === "vertical"){
          word.split("").forEach((letter, index) => {
                arr[array[0] + index][array[1]] = letter;
            })
        }else{
          word.split("").forEach((letter, index) => {
                arr[array[0]][array[1] + index] = letter;
        })
        return arr;
        }
    }

let runWords = words.map(word => Math.floor(Math.random() * 2) === 0 ? canFitHorizontally(word) : canFitVertically(word));

arr.forEach(eachArray => {
document.getElementById("puzzle").insertAdjacentHTML("beforeend",
    `<tr>
         <td>${eachArray}</td>
    </tr>`)
    });

//This finds all the places the word can fit diagonally.
/*function canFitDiagonally(word){
    subArray = arr.map((row, i) => 
                row.map((eachNum, index) => i + index < arr.length ? 
                arr[index][index + i] : "")
    );
    subArray2 = arr.map((row, i) => 
    row.map((eachNum, index) => i + index < arr.length ? 
    arr[index + i][index] : "") 
    );
    fullArr = subArray2.concat(subArray).slice(1).map(arr => arr.filter(row => /\w+/.test(row))).filter(arr => arr.length >= word.length);
    
        return fullArr.map((row, i) => 
            row.map((eachnum, index) => row.length - word.length >= index &&
                    row.slice(index, index + word.length)
                .every((item, ind) => /\d+/.test(item) || item === word[ind])
                ? newArray.push([i, index, "diagonal"]) : "")
    );
}*/
//returns an array which contains objects
    /*function allPossiblePositions(word){
        if(canFit(word)){
           return arr.map(row => row.filter((eachnum, index) => arr[0].length - word.length >= index && row.slice(index, index + word.length).every(item => /[0-9]/.test(item))));
        }
    }*/

    //allPositions = allPossiblePositions[Math.random() * newArray.length];
    
    //let test = arr.map(row => row.map(eachnum => eachnum));
    console.log(runWords)
    console.log(arr.map((num, i) => 
    num.map((eachnum, index) => arr[0].length - "happy".length >= index
           && num.slice(index, index + "happy".length)
        .every((item, ind) => /\d/.test(item) || item === "happy"[ind]) ? 
     allPossiblePositions.push([i, index, "vertical"]) : "")
))

}

/*subArray = arr.map((num, i) => 
                    num.map((eachNum, index) => arr[index][i]))      
                .map((num, i) => 
                num.map((eachnum, index) => arr.length - word.length >= index
                        && num.slice(index, index + word.length)
                    .every((item,ind) => /\d+/.test(item) || item === word[ind]) ? 
                    allPossiblePositions.push([index, i, "vertical"]) : "")*/
