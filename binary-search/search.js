const generateAlphabetArray = (charA = 'a', charZ = 'z') => {
    let array = [], j = charZ.charCodeAt(0);
    for (let i = charA.charCodeAt(0); i <= j; ++i) {
        array.push(String.fromCharCode(i));
    }
    return array;
}

function isAlphaNumeric(str) {
    var code; 
    let len = str.length; 
  
    for (let i = 0; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

const searchAndCompare = (string) => {

    let binarySearchResults = 0;
    let binarySearchIndex = 0;
    let linearSearchResults = 0;
    let linearSearchIndex = 0;

    function wordArr(str){
        const arr = []; 
        for (let i=0; i < str.length; i++){
            let letter = str[i]; 
            arr.push(letter)
        }
        return arr; 
    }

    let stringArr = wordArr(string);
    let alphabet = generateAlphabetArray(); 
    let letter = stringArr[0]

    if (!isAlphaNumeric(letter)) {
        console.log('Not a valid letter')
        return -1; 
        
    }

    else letter = letter.toLowerCase(); 

    for (let i = 0; i < alphabet.length; i++) {
        
        if (alphabet[i] !== letter) {
            linearSearchResults++;
        }

        if (alphabet[i] === letter) {
            linearSearchIndex = i;
            console.log('Letter Searched: ',letter, ' Linear Search Result: ', linearSearchResults, 'Index: ', i)
            break; 
        }
     
        if (i === alphabet.length - 1) {
            console.log('letter not found')
            return -1; 
        }
    }
    
    let recursiveBinarySearch = (arr, x, low, high) => {
        binarySearchResults++; 

        if (low > high) return console.log('invalid input'); 

        let mid = low + (high - low) / 2;
        let M = Math.floor(mid) 
        
        if (x == arr[M]) {

            binarySearchIndex = M; 
            console.log('Letter Searched: ', x, 'Binary Search Result: ', binarySearchResults, 'Index: ', M); 
        } 

        else if (x < arr[M]){
            return recursiveBinarySearch(arr, x, low, M-1)
        }
        else if (x > arr[M]) {
            return recursiveBinarySearch(arr, x, M + 1, high)
        }
        else return console.log("letter not found"); 
    }

    recursiveBinarySearch(alphabet, letter, 0, 25)

    // add the necessary inputs and and results to the DOM


    const arrayOfNumbersToSearchInsideElm = document.getElementById('searched-array-id') || {};
    arrayOfNumbersToSearchInsideElm.innerText += alphabet;

    const linearSearchResultsElm = document.getElementById('linear-search-results') || {};
    linearSearchResultsElm.innerText += linearSearchResults;

    const linearSearchPositionElm = document.getElementById('linear-search-position') || {};
    linearSearchPositionElm.innerText += linearSearchIndex;

    const binarySearchResultsElm = document.getElementById('binary-search-results') || {};
    binarySearchResultsElm.innerText += binarySearchResults;

    const binarySearchPositionElm = document.getElementById('binary-search-position') || {};
    binarySearchPositionElm.innerText += binarySearchIndex;

}

let input = "Way of Kings"; 

function call(str){

let n = str.length; 
    for (let i= 0; i < n; i++){
        searchAndCompare(str[i])
    }
}

call(input); 

