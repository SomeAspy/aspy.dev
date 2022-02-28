// Copyright (c) 2021-2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
/* eslint-disable no-unused-vars */
let names = ['Eric', 'Sally', 'Michelle', 'John', 'Sam', 'Caleb'];
let display = document.getElementById('nameCall');
display.innerHTML = `Welcome, ${names.join(', ')}`;
function all() {
    names.forEach(function (item) {
        alert('Welcome, ' + item);
    });
}
function everyOther() {
    names.forEach((element, index) => {
        if (index % 2 == 0) {
            alert(`Welcome, ${element}`);
        }
    });
}
function reverse() {
    let cache = names.reverse();
    cache.forEach((element) => {
        alert(`Welcome, ${element}`);
    });
}
function fourPlus() {
    names.forEach((element) => {
        if (element.length > 4) {
            alert(`Welcome, ${element}`);
        }
    });
}
function cFirst() {
    names.forEach((element) => {
        if (element.toLowerCase().charAt(0) == 'c') {
            alert(`Welcome, ${element}`);
        }
    });
}
function yLast() {
    names.forEach((element) => {
        if (element.charAt(element.length - 1) == 'y') {
            alert(`Welcome, ${element}`);
        }
    });
}
function middle() {
    let cache = names;
    cache.pop();
    cache.pop();
    cache.shift();
    cache.shift();
    cache.forEach((element) => {
        alert(`Welcome, ${element}`);
    });
}
function e() {
    names.forEach((name) => {
        let ready = true;
        let letters = name.split('');
        console.log(letters);
        letters.forEach((letter) => {
            console.log(letter);
            if (letter == 'e' || letter == 'E') {
                if (ready == true) {
                    alert(`Welcome, ${name}`);
                    ready = false;
                }
            }
        });
    });
}
