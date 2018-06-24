var Letter = require ("./Letter");

function Word (word) {
    //array of new letter objects
    this.word = word,   
    this.charArray = [],
    this.guessRemain = 5,
    //function that returns a string
    this.letterFunc = function()    {
    for (var i = 0; i < this.word.length; i++)  {
        this.charArray.push(new Letter(word[i]));
    }
}
    this.returnString = function()    {
        var hiddenWord = "";
        for (var i = 0; i < this.word.length; i++) {
            hiddenWord += this.charArray[i].revealCharacter();
        } 
        return hiddenWord;
    }
    // function that calls the guess function on each letter object
    this.guessLetter = function (character) {
        for (var i = 0; i < this.charArray.length; i++) {
            this.charArray[i].checkChar(character);
        }
        return this.returnString();
    }
}

module.exports = Word;