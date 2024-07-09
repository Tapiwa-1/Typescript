"use strict";
let stringArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
//Tuple
let myTuple = ['Hello', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 44;
//objects
let myObj;
myObj = [];
myObj = {};
console.log(typeof (myObj));
const exampleObj = {
    prop1: 'Dav',
    prop2: true,
};
let evh = {
    name: 'Tapiwa',
    active: true,
    albums: [1994, 5150, 'OU812']
};
let JP = {
    name: 'Motsi',
    active: false,
    albums: ['WQ', 5150, 'OU812']
};
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
console.log(greetGuitarist(JP));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 8] = "U";
    Grade[Grade["D"] = 9] = "D";
    Grade[Grade["C"] = 10] = "C";
    Grade[Grade["B"] = 11] = "B";
    Grade[Grade["A"] = 12] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
