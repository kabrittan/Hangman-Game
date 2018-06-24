//Building Conbstructor
function Letter (character)   {
    this.character = character,
    this.guessed = false,
    //correct or incorrect answer function 
    this.revealCharacter = function ()   {
        if (this.character === " ")    {
            return " ";
        }
        else if (this.guessed === true)   {
            return this.character;
        }
        else    {
            return "_ ";
        }
    }

//checks character against the actual character
    this.checkChar = function (guess)   {
        if (guess === this.character)   {
            this.guessed = true
        }
        
    }
}  

module.exports = Letter;