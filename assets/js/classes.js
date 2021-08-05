"use strict"

class Animal { //export
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido
    }
    get nombre() {
        this._nombre
    }
    get edad() {
        this._edad
    }
    get img() {
        this._img
    }
    set comentarios(newComentarios) {
        this._comentarios = newComentarios
    }
    get sonido() {
        this._sonido
    }
}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) { //...args
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir() {

    }
}


// import {animal} from "./script.js"
class Lobo extends Animal { //export
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar() {

    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    grunir() {

    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido) 
    }
    sisear() {

    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar() {

    }
}

// const boton = document.querySelector("#btnRegistrar")
// 
// boton.addEventListener("click",() => {
//     const optionAnimal = document.querySelector("#animal option:checked").value
//     console.log(optionAnimal)
// })
// 

(async () => {
    const response = await fetch("/animales.json")
    const {animales} = await response.json()

    const nombreAnimalHTML = document.querySelector("#animal")
    const edadAnimalHTML = document.querySelector("#edad")
    const comentariosAnimalHTML = document.querySelector("#comentarios")
    const imageAnimalPreview = document.querySelector("#preview")
    const btnRegisterPreview = document.querySelector("#btnRegistrar")

    nombre

})
