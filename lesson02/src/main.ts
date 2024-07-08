let myName: string;
let meaningOfLife: number
let isLoading: boolean
let album: string | number // this is called a union type
let postId: string | number
let isActive: number | boolean
let re: RegExp = /\w+/g // this is a regular expression

myName = "Tapiwa"
meaningOfLife = 34
isLoading = true
album = 44
album = "hello"

const sum = (a:number,b: string)=>{
    return a + b
}