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



//function registrar(event){
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

    if(nombre.value.length<5){
      // warnings +=`Nombre no válido`;
      warning1=`Nombre no válido`;
       entrar=true;
    }
    
    if(!regexEmail.test(email.value)){
       // warnings +=`Email no válido`;
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
    console.log(persona);

   

    persona.push(solicitante);
    localStorage.setItem('personas',JSON.stringify(persona))
     
    mensaje.innerHTML="Se ha suscripto exitosamente"
    enviarMail(email.value);

     //Inicializamos los campos
    nombre.value="";
    email.value="";
      }
}
)

//Función para enviar mails a los suscriptos

function enviarMail(correo){

  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "danielaescandar@gmail.com",
      Password : "5C2419E12E9B3C4F52A91228C16121E661EB",
      To : `${correo}`,//  para quién va dirigido
      From : "danielaescandar@gmail.com",
      Subject : "Gracias por suscribirse!",
      Body : "Bienvenido a la familia de BLOOD PLUS! Ahora tendrás la información que necesitas para ser donante voluntario de sangre o difundir campañas solidarias",
  
      Attachments : [
          {
              name : "8033054881552118965298cc897838b5.jpg",
              path : "https://i.pinimg.com/originals/80/33/05/8033054881552118965298cc897838b5.jpg"
          }]
  
  
  }).then(
    message => alert(message)
  );
  }
