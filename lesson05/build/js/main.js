"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
//alternative
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'concat');
const img = document.querySelector('img');
const myImg = document.getElementById('#img'); //! this is non null insertion
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
