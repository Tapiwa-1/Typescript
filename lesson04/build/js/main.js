"use strict";
//Literal types
let myName;
let userName;
userName = 'Dave';
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(30, 40));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number) : number
// }
let multiply = function (c, d) {
    return c * d;
};
//optional paramemters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 3) => {
    return a + b + c;
};
console.log(sumAll(1, 2));
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
