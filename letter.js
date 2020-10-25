//Script de Newsletter

let persona=[]
class Persona{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
}
}

let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let form=document.getElementById('form');
let mensaje= document.getElementById('warnings');
let mensaje1= document.getElementById('warning1');
let mensaje2= document.getElementById('warning2');



//Validaciones
    form.addEventListener("submit",e=>{
    
    e.preventDefault(); //evita que se recargue el formulario sin antes guardar la info
    
    let warnings=``;
    let warning1=``;
    let warning2=``;
    let entrar=false;
    let regexEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    mensaje.innerHTML="";
    mensaje1.innerHTML="";
    mensaje2.innerHTML="";

 //Si el nombre tiene menos de cinco letras
    if(nombre.value.length<5){
      warning1=`Nombre no válido`;
       entrar=true;
    }

 //Si el email no tiene el formato correcto
    if(!regexEmail.test(email.value)){
       warning2 =`Email no válido`;
        entrar=true;
    }
    if(entrar){
      mensaje1.innerHTML=warning1;
      mensaje2.innerHTML=warning2;
      mensaje.innerHTML=warnings;
    }
      else{
    
    let solicitante = new Persona(nombre.value, email.value);

    //Inicializamos los campos
    nombre.value="";
    email.value="";

    //Se guarda la información de la persona en el localStorage
    persona.push(solicitante);
    localStorage.setItem('personas',JSON.stringify(persona))
     
    mensaje.innerHTML="Enviado"
      }
})