const admin = {
    user: "admin",
    pass: "admin",
}


localStorage.setItem("login", JSON.stringify(admin))

() {
    let name = document.getElementById("name")
    console.log("hola")
    let password = document.getElementById("password")
    if ("login" in localStorage) {
        let usuario = JSON.parse(localStorage.getItem("login"))
        if (usuario.user == name.value && usuario.pass == password.value) {
            console.log(usuario);
            location.replace("/admin.html")
            return
        } else {
            alert("Usuario o contraseña incorrecto")
            return
        }
    }
}


