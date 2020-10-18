export function campoRequerido (input) {
    if (input.value != "") {
        input.className = "form-control is-valid"
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}

export function validarNumero(input) {
    if (input.value != "" && !isNaN(input.value)){
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}

export function validarEmail (input) {
    let expresion = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (input.value != "" && expresion.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
