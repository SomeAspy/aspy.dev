// Copyright (c) 2021-2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// Edited from original for use in the site. Original: https://github.com/SomeAspy/SchoolRepos/tree/main/HighSchool/JavaScript/project4
let fails = 6;
function takeGuess() {
    return prompt('Enter a letter');
}
function refresh() {
    document.getElementById('word').innerHTML = display;
}
const chosen = wordData.noun[Math.floor(Math.random() * wordData.noun.length)];
console.log(`${chosen}\n${'?'.repeat(chosen.length)}\n${chosen.length}`);
let display = '?'.repeat(chosen.length);
refresh();
function process() {
    if (chosen.includes(window.guess)) {
        display = display.split('');
        display.splice(chosen.indexOf(window.guess), 1, window.guess);
        display = display.join('');
        console.log(display);
        refresh();
    } else {
        $(document.getElementById(fails)).removeClass();
        fails -= 1;
        if (fails == 0) {
            display = chosen;
            refresh();
            document.getElementById('button').remove();
        }
    }
}
