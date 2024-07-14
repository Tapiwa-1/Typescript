class Coder {
    
    secongLang!: string
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = "TypeScript"
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge(){
        return `Hell, l'm ${this.age}`
    }
}

const Dave = new Coder('Dave','Rock', 42)

console.log(Dave.getAge())


class WebDev extends Coder {
    constructor(
        public computer:string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age) 
        this.computer = computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac','Sara','Dancehall',25)

console.log(Sara.getLang())
/****************************************************/

interface Musician{
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician{
    name: string
    instrument: string
    constructor(
        name: string,
        instrument: string,
    ) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
    
}

const Page = new Guitarist('Taps','Drum')
console.log(Page.play('Plays'))