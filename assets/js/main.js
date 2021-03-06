"use strict"

import {Animal} from "./classes.js"
import {Leon, Lobo, Oso, Serpiente, Aguila} from "./animal.js"

(async () => {
    const response = await fetch("/animales.json")
    const { animales: Animales } = await response.json()

    const nombreAnimalHTML = document.querySelector("#animal")
    const animalContainerHTML = document.querySelector("#Animales")
    const imageAnimalPreview = document.querySelector("#preview")
    const btnRegisterPreview = document.querySelector("#btnRegistrar")

    const AnimalCard = []

    nombreAnimalHTML.addEventListener("change", () => {
        const nombreElegidoHTML = document.querySelector("#animal option:checked").value
        const nombreEncontrado = Animales.find( (animal) => animal.name === nombreElegidoHTML)

        imageAnimalPreview.setAttribute(`src`, `/assets/imgs/${nombreEncontrado.imagen}`)
        console.log(nombreElegidoHTML)
    })
    btnRegisterPreview.addEventListener("click", () => {
        //if(nombreElegidoHTML === "Seleccione un animal") {
        //    const nombreError = document.querySelector("#nombreError")
        //    nombreError.innerHTML = "Porfavor seleccione un animal"
        //} else if(edadElegidaHTML === "Seleccione un rango de años") {
        //    const edadError = document.querySelector("#edadError")
        //    edadError.innerHTML = "Porfavor seleccione un rango de edad"
        //} else if(comentariosAnimalHTML == undefined) {
        //    const comentariosError = document.querySelector("#comentariosError")
        //    comentariosError.innerHTML = "Porfavor escriba algún comentario"
        //} else
        //
        const nombreElegidoHTML = document.querySelector("#animal option:checked").value
        const edadElegidaHTML = document.querySelector("#edad option:checked").value
        const comentariosAnimalHTML = document.querySelector("#comentarios").value
        const nombreEncontrado = Animales.find( (animal) => animal.name === nombreElegidoHTML)

        const AnimalDatos = [nombreElegidoHTML, edadElegidaHTML, comentariosAnimalHTML, nombreEncontrado.imagen, nombreEncontrado.sonido]
        console.log(AnimalDatos)

        switch (nombreElegidoHTML) {
            case "Leon":
                AnimalCard.push(new Leon(...AnimalDatos))
                break;
            
            case "Lobo":
                AnimalCard.push(new Lobo(...AnimalDatos))
                break;

            case "Oso":
                AnimalCard.push(new Oso(...AnimalDatos))
                break;

            case "Serpiente":
                AnimalCard.push(new Serpiente(...AnimalDatos))
                break;

            case "Aguila":
                AnimalCard.push(new Aguila(...AnimalDatos))
                break;
        }
        render()
        console.log(nombreElegidoHTML)
    })
    function render() {
        animalContainerHTML.innerHTML = ""

        AnimalCard.forEach((animal) => {
            const containerDiv = document.createElement("div")
            const img = document.createElement("img")
            const cardButtonDiv = document.createElement("div")
            
            containerDiv.classList.add("card", "bg-secondary", "text-white", "mx-2", "mb-1", "custom")

                img.setAttribute(`src`, `/assets/imgs/${animal.img}`)
                console.log(animal._comentarios)

                img.addEventListener("click", () => {
                    $("#exampleModal").modal("show");

                    const modalBodyElement = document.querySelector("#exampleModal .modal-body");
            
                    modalBodyElement.innerHTML = `
                      <img src="/assets/imgs/${animal.img}" style="max-width: 300px" class="mx-auto"/>
                      <ul class="text-white text-center list-unstyled">
                        <li>Nombre: ${animal.nombre}</li>
                        <li>Edad: ${animal.edad}</li>
                        <li>Comentarios: ${animal._comentarios}</li>
                      </ul>
                    `;
                })

                cardButtonDiv.classList.add("card-footer")
                cardButtonDiv.innerHTML = `
                <button class="btn btn-primary btn-block">
                    <img src="/assets/imgs/audio.svg" style="width: 10px">
                </button>
                `
                cardButtonDiv.addEventListener("click", () => {
                    switch (animal.nombre) {
                        case "Leon":
                            animal.rugir()
                            break;
                        
                        case "Lobo":
                            animal.aullar()
                            break;

                        case "Oso":
                            animal.grunir()
                            break;

                        case "Serpiente":
                            animal.sisear()
                            break;

                        case "Aguila":
                            animal.chillar()
                            break;
                    }
                })

                containerDiv.appendChild(img)
                containerDiv.appendChild(cardButtonDiv)
                animalContainerHTML.appendChild(containerDiv)
        })
    }

}) ()
