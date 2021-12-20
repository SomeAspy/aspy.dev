// Copyright (c) 2021 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
function main(){
    let str=prompt("Enter A word!");
    str=str.split("");
    str.forEach(char => {
        alert(char);
        console.log(char);
    });
}