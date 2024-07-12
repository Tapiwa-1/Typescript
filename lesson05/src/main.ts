type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific
let a: One = 'hello'
let b = a as Two //less specific
let c = a as Three //more specific

//alternative
let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number,b : number, c: 'add' | 'concat' ) : number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}


let myVal: string = addOrConcat(2,2,'concat') as string

let nextVal: number = addOrConcat(2,2,'concat') as number

const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('#img')! as HTMLImageElement //! this is non null insertion
const nextImg = <HTMLImageElement>document.getElementById('#img')
img.src
myImg.src