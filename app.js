  //  const usuario = {
  //      nombre: "admin",
  //      password: "12345678",
  //  };
localStorage.setItem("logueo", JSON.stringify(usuario));
localStorage.setItem('autenticado', 'false')

let botoncito = document.getElementById("botones");

//let logueo = false;
let logueo = localStorage.getItem("autenticado");

const validacion = (logueo) => {
let pagina = location.pathname;
if (pagina === "/admin.html") {
  if (logueo === "false") {
    // $('#exampleModalCenter').modal('show')
    location = "Avisos.html";
  }
}
};

const loguear = () => {
if (logueo === "true") {
  botoncito.innerHTML = botonCerrar;
} else {
  botoncito.innerHTML = botonInicio;
}
};

const logueoChange = () => {
let usuario = document.getElementById("user").value;
let password = document.getElementById("password").value;

let dato = JSON.parse(localStorage.getItem("logueo"));
if (usuario === "" || password === "") {
  return alert("Debe ingresar valores en los campos");
}
if (dato.nombre === usuario) {
  if (dato.password === password) {
    logueo = true;
    loguear();
    localStorage.setItem("autenticado", "true");
    window.location = "admin.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
} else {
  alert("Usuario o contraseña incorrectos");
}

document.getElementById("user").value = "";
document.getElementById("password").value = "";
//   logueo = !logueo;
//   if (!logueo) {
//     alert("Se ha deslogueado con éxito");
//   }
//   loguear();
};
const desloguear = () => {
logueo = false;
alert("Has sido deslogueado");
localStorage.setItem("autenticado", "false");
loguear();
window.location = "Avisos.html";
};
let botonInicio = `<button
            id="botonLogueo"
            class="btn btn-outline-success my-2 my-sm-0"
            type="button"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            Iniciar sesión
          </button>`;
let botonCerrar = `<button
            id="botonSingout"
            class="btn btn-outline-secondary my-2 my-sm-0"
            type="button"
            onclick="desloguear()"
          >
            Cerrar sesión
          </button>`;
loguear();
validacion(logueo);
//para  actualizar las cards
localStorage.clear();

//----Creacion de cards-------
class Aviso {
  constructor(grupo, factor) {
    this.grupo = grupo;
    this.factor = factor;
    // this.stock = stock;
  }
}

//Inicializando programa------------------------------------
let avisos = [];
let carrito = [];
let contador = 0;
let shoppingCart = document.getElementById("shoppingCart");
document.getElementById("contador").innerHTML = contador;

let A = new Aviso("RH", "+");
let B = new Aviso("RH", "-");
let AB = new Aviso("RH", "+");
let O = new Aviso("RH", "-");

avisos.push(A,B,AB,O);

localStorage.setItem("avisos", JSON.stringify(avisos));

let db = JSON.parse(localStorage.getItem("avisos"));
//--------------------------------------------------------------

//Crear las cards
let tarjetas = document.getElementById("tarjetas");

db.map(function (prod,i) {
  let cardi = `<div class="col col-md-4 col-lg-4">
  <div class="card border-dark bg-light mb-3 ">
    <div class="card-header border-dark text-center text-uppercase"><img src="https://img.icons8.com/color/80/000000/drop-of-blood.png"/>    Solidaridad </div>
    <div class="card-body" >
      <h5 class="card-title text-center">Se Solicitan Dadores Grupo: ${prod.grupo} Factor: ${prod.factor}</h5>
      <p class="card-text"> <b> Hospital Avellaneda.
        Catamarca 2000, San Miguel de Tucumán, Tucumán.</b> JUEVES 5/10 DE 9 a 13 hs. Se cumplen con todas las estrictas medidas de Bioseguridad y distanciamiento social. <a href="#">#SumateDonaSangre</a> 
      </p>
      <a href="#" class="btn btn-primary">Button</a>
      <button class='btn btn-warning float-right' onclick='addCarrito(${i})'>Agregar</button>
    </div>
  </div>
</div>`;

  tarjetas.innerHTML += cardi;
});

function addCarrito(index) {
  let  Aviso = db[index];

  delete Aviso.stock;

  //   console.log(producto);

  let storage = JSON.parse(localStorage.getItem("carrito")) || []; //si no existe la clave me devuelva un arreglo vacio

  storage.push(Aviso);

  localStorage.setItem("carrito", JSON.stringify(storage));

  contador = storage.length;

  document.getElementById("contador").innerHTML = contador;
}

function VerCarrito(veo) {
  let a = db[veo];
  let pro = JSON.parse(localStorage.getItem("carrito"));
  localStorage.setItem("carrito", JSON.stringify(pro)); 
  //localStorage.setItem("carrito", JSON.stringify(producto));
  //console.log(pro);
 // alert(localStorage.getItem("carrito"));
}
function mod(pro) {
  let modal = `
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button>
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <h5 class="modal">VerCarrito()</h5>
        <p class="modal"><strong> </strong></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`
}