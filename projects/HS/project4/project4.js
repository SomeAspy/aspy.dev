// Copyright (c) 2021-2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// Edited from original for use in the site. Original: https://github.com/SomeAspy/SchoolRepos/tree/main/HighSchool/JavaScript/project4
let fails = 6 //set a counter for the amount of chances
function takeGuess(){ //this is called by the button
    return(prompt("Enter a letter")) //prompt user to enter a letter, and return the output
};
function refresh() { //refreshes the display
    document.getElementById("word").innerHTML = display; //tells HTML to update the page to match the current progress
}
const chosen = nouns[Math.floor(Math.random()*nouns.length)] //pick a random word from words.js
console.log(chosen) //log that word to console, for easy debugging or cheating
console.log("?".repeat(chosen.length)) //log the empty guess things, more debugging
console.log(chosen.length) //log the length of the chosen word, for debugging
let display = "?".repeat(chosen.length) //set the display variable to the amount of spaces we need
refresh() //refresh the shown display
function process() { //called by the button to process guesses
if (chosen.includes(window.guess)) { //check if the chosen word includes the guessed letter
    display = display.split("") //turn the progress display into an array
    display.splice(chosen.indexOf(window.guess), 1, window.guess) //find and replace blanks with the guessed letter (only one at a time, cuz I'm lazy)
    display = display.join("") //turn the array back into a string
    console.log(display) //log the display for debugging
    refresh() //refresh the display
} else { //if it the letter is not in the word, execute below
    $(document.getElementById(fails)).removeClass() //remove circles
    fails -=1 // subtract 1 from fails
    if(fails==0) { //if fails = 0
        display = chosen //show the word
        refresh() //refresh display
        document.getElementById("button").remove() //remove button
    }
}
}