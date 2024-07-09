//type Aliases
type stringOrNumber = string | number

type stringOrNumberArray =  (string | number) []

type Guitarist = {
    name?: string,
    active?: boolean, //This can be optional
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

//Literal types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'

userName = 'Dave'


//functions
const add = (a: number,b: number) : number=> {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello')
logMsg(add(30,40))

let subtract = function (c:number, d: number): number{
    return c - d
}

type mathFunction = (a: number, b: number) =>number
// interface mathFunction {
//     (a: number, b: number) : number
// }

let multiply: mathFunction = function(c,d){
    return c * d
}

//optional paramemters
const addAll = (a:number, b:number,c?:number): number => {
    if (typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

const sumAll = (a:number, b:number,c:number = 3): number => {

    return a + b + c
}

console.log(sumAll(1,2))

//Rest Parameters
const total = (...nums: number[]): number =>{
    return nums.reduce((prev,curr)=> prev + curr)
}

logMsg(total(1,2,3,4,5,6,7))

const createError = ( errMsg: string): never => {
    throw new Error(errMsg)
}

const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
} 

const numberOrString = (value: number | string) : string =>
{
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'

    return createError('This should never happen')
    
}