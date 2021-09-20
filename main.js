var fs = require("fs");
var words = fs.readFileSync("words.txt").toString();
words = words.split("\n");

var badLetters = /[gkmqvwxzio]/;
var longestAcceptableWord = "";
var wordArray = [];

for (var testWord of words) {
    if((testWord.length < longestAcceptableWord.length) || (testWord.match(badLetters))) {
        continue;
    }
    else if (testWord.length == longestAcceptableWord.length) {
        wordArray.push(testWord);
    }
    else {
        longestAcceptableWord = testWord;
        wordArray = [testWord];
    }
}

console.log(words.length);
console.log(longestAcceptableWord);
console.log(longestAcceptableWord.length);
console.log(wordArray);