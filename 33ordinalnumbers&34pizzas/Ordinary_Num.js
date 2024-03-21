"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinalSuffix;
    if (num === 1) {
        ordinalSuffix = "st";
    }
    else if (num === 2) {
        ordinalSuffix = "nd";
    }
    else if (num === 3) {
        ordinalSuffix = "rd";
    }
    else {
        ordinalSuffix = 'th';
    }
    console.log(`${num}${ordinalSuffix}`);
}
//or
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const n of number) {
    if (n === 1) {
        console.log(`${n}st`);
    }
    else if (n === 2) {
        console.log(`${n}nd`);
    }
    else if (n === 3) {
        console.log(`${n}rd`);
    }
    else {
        console.log(`${n}th`);
    }
}
