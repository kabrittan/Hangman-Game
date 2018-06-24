var Word = require ("./Word");
var inquirer = require("inquirer");
//remaining guesses put into word.js
//randomly selects a word
//word bank
//var word = new Word("play");
var farmWords = ["cow", "chicken", "goat", "horse", "saddle", "plow", "barn", "corral", "stable", "geese", "trough", "hay", "rooster", "pitchfork", "hen house", "shovel"];
var wordMath = Math.floor(Math.random() * (farmWords.length + 1));
//console.log(wordMath);
var play = new Word(farmWords[wordMath]);
//returns object
play.letterFunc();
//console.log(play.charArray);
var hiddenWord = play.guessLetter();
var userExp = function ()   {

    if (play.guessRemain > 0)   {
    
    if (hiddenWord.trim().includes("_"))   {
        inquirer.prompt([
      {
        type: "prompt",
        message: "Guess a letter",
        name: "guess"
      }
    
    ])
        .then(function(response) {
            hiddenWord = play.guessLetter(response.guess);
        console.log(play.guessLetter(response.guess));
        if (!play.word.includes(response.guess) && !play.charArray.includes(response.guess))    {
            console.log("Bad guess");
            play.guessRemain--;
            console.log(play.guessRemain +  " guesses remaining \n");
        }
        userExp();
      });

    }
    else  {
        console.log("Great job - you WIN!")

    }
        }
        else   {
        console.log("Game over!  The correct word was " + play.word +  "Play again!");

    } 
}

userExp();