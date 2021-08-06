"use strict"

import {Animal} from "./classes.js"
import {Leon, Lobo, Oso, Serpiente, Aguila} from "./animal.js"

(async () => {
    const response = await fetch("/animales.json")
    const { animales: Animales } = await response.json()
    console.log(response.json)

    const nombreAnimalHTML = document.querySelector("#animal")
    const edadAnimalHTML = document.querySelector("#edad")
    const comentariosAnimalHTML = document.querySelector("#comentarios")
    const animalContainerHTML = document.querySelector("#Animales")
    const imageAnimalPreview = document.querySelector("#preview")
    const btnRegisterPreview = document.querySelector("#btnRegistrar")

    nombreAnimalHTML.addEventListener("change", () => {
        const nombreElegidoHTML = document.querySelector("#animal option:checked").value
        console.log(nombreElegidoHTML)

    })

    btnRegisterPreview.addEventListener("click", () => {
        const edadElegidaHTML = document.querySelector("#edad option:checked").value
        console.log(edadElegidaHTML)

    })


}) ()
