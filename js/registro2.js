
let registrados = JSON.parse(localStorage.getItem("registrados")) || []

class Persona {
    constructor(nombre, apellido, email, celular, grupo, factor) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.celular = celular
        this.grupo = grupo
        this.factor = factor

    }
}

let nombre = document.getElementById("nombre")
let email = document.getElementById("email")
let positivo = document.getElementById("postivo")
let negativo = document.getElementById("negativo")
let apellido = document.getElementById('apellido')
let celular = document.getElementById('celular')
let grupo = document.getElementById('grupoSanguineo')
let parrafo = document.getElementById("warnings")



let form = document.getElementById("form")

//VALIDACIONES

let factor = "";

positivo.addEventListener("click", function () {

    if (positivo.checked) {
        factor = positivo.value
    }

})
negativo.addEventListener("click", function () {
    if (negativo.checked) {
        factor = negativo.value

    }
})



//Registro
form.addEventListener("submit", e => {
    e.preventDefault()

    let warning = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    for (let i in registrados) {
        if (registrados[i].email == email.value) {
            alert("Email existente")
            return
        }
    }
    if (nombre.value.length < 4) {
        warning += `Nombre invalido! <br>`
        entrar = true
    }
    if (apellido.value.length < 4) {
        warning += `Apellido invalido! <br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warning += `Email invalido! <br>`
        entrar = true
    }
    if (isNaN(celular) && celular.value.length > 12 || celular.value.length < 7) {
        warning += `Numero invalido!<br>`
        entrar = true
    }
    if (!factor) {
        entrar = true
        warning += `Factor invalido`
    } if (entrar) {
        parrafo.innerHTML = warning
    } else {
        // for (let i in registrados) {
        //     if (registrados[i].email == email) {
        //         console.log("Encontrado")
        //         return
        //     }
        // }

        let persona = new Persona(
            nombre.value,
            apellido.value,
            email.value,
            celular.value,
            grupo.value,
            factor,
        )
        console.log(persona)
        registrados.push(persona)
        nombre.value = ''
        apellido.value = ''
        email.value = ''
        celular.value = ''

        grupo.value = 1

        localStorage.setItem('registrados', JSON.stringify(registrados))

        alert("Registro enviado!")
        location.replace("principal.html")

    }
})


