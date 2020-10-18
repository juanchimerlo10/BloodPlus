

let registrados = []




class Persona { 
constructor(nombre, apellido,email, celular, grupo, factor){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.celular = celular
    this.grupo = grupo
    this.factor = factor

}
}


let nombre =document.getElementById("nombre")
let email = document.getElementById("email")
let positivo = document.getElementById("postivo")
let negativo = document.getElementById("negativo")
let apellido = document.getElementById('apellido')
let celular = document.getElementById('celular')
let grupo = document.getElementById('factorSanguineo')
let factor = "";

positivo.addEventListener("click", function(){
    if (positivo.checked){
        factor = positivo.value
    }
    
})
negativo.addEventListener("click", function(){
    if (negativo.checked){
        factor = negativo.value
        
    }
})


function guardarPersona (event){
    event.preventDefault()

    
    let persona = new Persona ( 
        nombre.value,
        apellido.value,
         email.value,
         celular.value,
         factor,
         grupo.value)
         console.log(persona)
    registrados.push(persona)
    nombre.value = ''
    apellido.value=''
    email.value = ''
    celular.value = ''
    factor.value = ''

    localStorage.setItem('registrados', JSON.stringify (registrados))
}



