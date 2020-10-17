let registrados = []
class Persona { 
constructor(nombre, apellido,email, celular, factor){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.celular = celular
    this.factor = factor
}
}


let nombre =document.getElementById("nombre")
let email = document.getElementById("email")
let form = document.getElementById("form")
let apellido = document.getElementById('apellido')
let celular = document.getElementById('celular')
let factor = document.getElementById('factorSanguineo')
let warnings = document.getElementById('warnings')

function arreglo (event){
    event.preventDefault()
    let persona = new Persona ( 
        nombre.value,
        apellido.value,
         email.value,
         celular.value,
         factor.value)
         console.log(persona)
    registrados.push(persona)
    nombre.value = ''
    apellido.value=''
    email.value = ''
    celular.value = ''
    factor.value = ''

    localStorage.setItem('registrados', JSON.stringify (registrados))
}



// Validaciones 
// form.addEventListener('submit', e => {
//     let warnings = ''
//     let entrar = false
//     let valEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (nombre.value.length < 4){
//         warnings += `Nombre invalido <br>`
//         entrar = true
//     } if (!valEmail.test(email.value)){
//         warnings += `Email invalido <br>`
//         entrar = true
//     }
    
// })
