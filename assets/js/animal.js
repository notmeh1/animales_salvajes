"use strict"
 
import {Animal} from "./classes.js"

 export class Leon extends Animal {
    constructor(...args) {
        super(...args)
    }
    rugir() {
        this.playSound()
    }
}

export class Lobo extends Animal {
    constructor(...args) {
        super(...args)
    }
    aullar() {
        this.playSound()
    }
}

export class Oso extends Animal {
    constructor(...args) {
        super(...args)
    }
    grunir() {
        this.playSound()
    }
}

export class Serpiente extends Animal {
    constructor(...args) {
        super(...args) 
    }
    sisear() {
        this.playSound()
    }
}

export class Aguila extends Animal {
    constructor(...args) {
        super(...args)
    }
    chillar() {
        this.playSound()
    }
}
