let stringArr = ['one','two','three']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

//Tuple
let myTuple: [string,number,boolean] =['Hello',42,true]

let mixed = ['John',1,false]

myTuple[1] = 44

//objects
let myObj: object
myObj = []
myObj ={}
console.log(typeof(myObj))

const exampleObj = {
    prop1: 'Dav',
    prop2: true,
}

// type Guitarist = {
//     name: string,
//     active?: boolean, //This can be optional
//     albums: (string| number) []
// }

interface Guitarist {
    name?: string,
    active?: boolean, //This can be optional
    albums: (string| number) []
}


let evh: Guitarist = {
    name: 'Tapiwa',
    active:true,
    albums: [1994, 5150, 'OU812']
}

let JP: Guitarist = {
    name: 'Motsi',
    active:false,
    albums: ['WQ', 5150, 'OU812']
}
 
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name?.toUpperCase()}!`
}

console.log(greetGuitarist(JP))

//Enums
enum Grade {
    U =8,
    D,
    C,
    B,
    A
}

console.log(Grade.U)