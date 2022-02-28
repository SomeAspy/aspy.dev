// Copyright (c) 2021-2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let y = [-99, -98, -97, -96, -95, -94, -93, -92, -91, -90];

function addAll(list) {
    let cache = 0;
    list.forEach((element) => {
        cache += element;
    });
    return cache;
}
console.log(addAll(x));

function avg(list) {
    return addAll(list) / list.length;
}
console.log(avg(x));

function hasNeg(list) {
    let cache = false;
    list.forEach((element) => {
        if (Math.sign(element) === -1) {
            cache = true;
        }
    });
    return cache;
}
console.log(hasNeg(x));

function inOrder(list) {
    let cache = 0;
    let out = true;
    list.forEach((element) => {
        if (cache > element) {
            out = false;
        } else {
            cache = element;
        }
    });
    return out;
}

console.log(inOrder(x));

function largest(list) {
    let cache = 0;
    list.forEach((element) => {
        if (element > cache) {
            cache = element;
        }
    });
    return cache;
}

console.log(largest(x));

function absolute(list) {
    let out = new Array();
    list.forEach((element) => {
        out.push(Math.abs(element));
    });
    return out;
}
console.log(absolute(x));

function even(list) {
    let out = new Array();
    list.forEach((element) => {
        if (element % 2 == 0) {
            out.push(element);
        }
    });
    return out;
}

console.log(even(x));

function addArray(list1, list2) {
    let out = new Array();
    list1.forEach((element) => {
        out.push(list1.shift() + list2.shift());
    });
    return out;
}

console.log(addArray(x, y));
