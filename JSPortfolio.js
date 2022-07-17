const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensaje = document.getElementById("message");
const form = document.getElementById("form");
const texterr = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    texterr.innerHTML = ""
    var minLength = 5;
    var length = document.getElementById("nome").value.length;
    var lenght2 = document.getElementById("message").value.length;

    if (length < minLength) {
        warnings += `Nome inválido <br>`
        enviar = true
    }

    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `Email inválido <br>`
        enviar = true
    }

    if (lenght2 < minLength) {
        warnings += `Mensagem inválida <br>`
        enviar = true
    }

    if(enviar){
        texterr.innerHTML = warnings
    }
    else{
        texterr.innerHTML = "Enviado com sucesso!"
    }
})