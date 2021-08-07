"use strict"

 export class Animal {
    constructor(nombre, edad, comentarios, img, sonido) {
        this._nombre = nombre
        this._edad = edad
        this._comentarios = comentarios
        this._img = img
        this._sonido = sonido
    }
    get nombre() {
        return this._nombre
    }
    get edad() {
        return this._edad
    }
    set comentarios(newComentarios) {
        return this._comentarios = newComentarios
    }
    get img() {
        return this._img
    }
    get sonido() {
        return this._sonido
    }

    playSound() {
        const player = document.querySelector("#player")
        player.setAttribute(`src`, `/assets/sounds/${this._sonido}`)
        player.load()
        player.play()
    }
}
