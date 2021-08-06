"use strict"

 export class Animal {
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


// const boton = document.querySelector("#btnRegistrar")
// 
// boton.addEventListener("click",() => {
//     const optionAnimal = document.querySelector("#animal option:checked").value
//     console.log(optionAnimal)
// })
// 

