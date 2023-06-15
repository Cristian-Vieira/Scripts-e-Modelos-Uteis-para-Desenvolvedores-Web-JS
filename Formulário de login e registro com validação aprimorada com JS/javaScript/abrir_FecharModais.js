 // Pegar os elementos do DOM
const MODAL_LOGIN = document.querySelector("#modalLogin")
const MODAL_REGISTRO = document.querySelector("#modalregistro")
document.querySelector("#btnEntrar").addEventListener("click", abrirLogin)
document.querySelector("#btnRegistro").addEventListener("click", abrirRegistro)
document.querySelector("#btnFecharLogin").addEventListener("click", fecharLogin)
document.querySelector("#btnFecharRegistro").addEventListener("click", fecharRegistro)
document.querySelector("#cancelBtn").addEventListener("click", fecharRegistro)


function abrirLogin() {
    MODAL_LOGIN.style.display='block'
}

function abrirRegistro() {
    MODAL_REGISTRO.style.display='block'
}

function fecharLogin() {
    MODAL_LOGIN.style.display='none'
}

function fecharRegistro() {
    MODAL_REGISTRO.style.display='none'
}
