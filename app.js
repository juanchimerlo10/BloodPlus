const nombre =document.getElementById("nombre")
const email = document.getElementById("email")
const form = document.getElementById("form")
// VALIDACION DE EMAIL
// const validateEmail = () => {
//     let email = document.getElementById("email");

//     if (email.value.match(/([a-z]\w+@[a-z]+.[a-z]{2,5})/)){
//         console.log("Correo correcto");
//     } else {
//         console.error("No cumple el formato de correo")
//     }
// }

form.addEventListener("submit", e => {
    e.preventDefault(),

    let validarEmail = /[a-z]\w+@[a-z]+.[a-z]{2,5})/;
    if (!validarEmai.test(email.value)){
        
    }

})