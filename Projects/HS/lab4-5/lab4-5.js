// Copyright (c) 2021 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
/*
Alright.
So java already includes all this!
For part 1, there is a array method called includes()
Includes is used in the following way
listName.includes(what your searching for)
What your searching for can be a string or variable with a string.
List name should be an array.
It will return true or false.
https://www.w3schools.com/jsref/jsref_includes_array.asp
For part 2, index of is literally already there!
Its called indexOf()
Works about the same as includes()
listName.indexOf(value)
It will return the index of the item you searched, and if it cannot be found it will return -1
https://www.w3schools.com/jsref/jsref_indexof_array.asp
*/

let x = ["bop", "pp", "eat", "car", "etc", "vroom"];

function FirstWordThatStartsWith(list, letter) {
    let output=null;
    list.forEach(element => {
        if(element.startsWith(letter)) {
            output=element;
        }
    });
    return output;
}
console.log(FirstWordThatStartsWith(x,"e"));

// takes list and letter as input, and will do its thing. replace that with e for first e word.