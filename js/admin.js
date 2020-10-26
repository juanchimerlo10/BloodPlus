const admin = {
    nombre: "admin"
    password: "admin",
}

localStorage.setItem("inicioSesion", JSON.stringify(usuario))
localStorage.setItem("auth", "false")


let btnLogin = document.getElementById("inicioSesion")

let login = localStorage.getItem("auth")


//validacion de login => pagina admin
const validation = (login) => {
    let paginaAdmin = location.pathname
    if (paginaAdmin === "/admin.hmtl") {
        if (login === "false") {
            // $("#modalLogin").modal("show")
            location = "principal.html"
        }

    }
}

const loguear = () => {
    if (login === "true") {
        btnLogin.innerHTML = btnCerrar;
    } else {
        btnLogin.innerHTML = btnInicio
    }
}
const logueoChange = () => {
    let usuario = document.getElementById("user").value
    let password = document.getElementById("password").value

    let dato = JSON.parse(localStorage.getItem("login"))
    if (usuario === "" || password === "") {
        return alert("Debe ingresar valores en los campos")
    }
    if (dato.nombre === usuario) {
        if (dato.password === password) {
            login = true
            loguear()
            localStorage.setItem("auth", "true")
            window.location = "admin.html"
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    } else {
        alert("Usuario o contraseña incorrectos")
    }
    document.getElementById("user").value = ""
    document.getElementById("password").value = ""

    const desloguear = () => {
        login = false
        alert("Has sido deslogueado")
        localStorage.setItem("auth", "false")
        loguear()
        window.location = "pricipal.html"
    }


    let btnInicio = `<button 
            id="botonLogin"
            class="btn btn-outline-secondary"
            type="button"
            data-toggle="modal"
            data-target="staticBackdrop"
            >
            Iniciar Sesion
            </button>`;
    let btnCerrar = `<button 
            id="botonSalir"
            class="btn btn-outline-secondary"
            type="button"
            onclick="desloguear()"
            >
            Cerrar Sesion
            </button>`;
    loguear();
    validation(login)