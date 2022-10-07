const texto = document.querySelector('textArea')
const btnEncriptar = document.getElementById('encriptar')
const btnDesencriptar = document.getElementById('desencriptar')
const btncopiar = document.getElementById('copiar')
const resultado = document.getElementById('resultado')
const criptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

function Desaparer(){
    document.getElementById('aparece').style.display = 'block';
    document.getElementById('desaparece').style.display = 'none';
}

function aparecer() {
    document.getElementById('desaparece').style.display = 'flex';
    document.getElementById('aparece').style.display = 'none';
}

// ! Captura evento de los botones encripatar y desencriptar

btnEncriptar.addEventListener('click', () => {  
    resultado.textContent = encriptar(texto.value.toLocaleLowerCase());
    Desaparer();
    texto.value = '';
})

btnDesencriptar.addEventListener('click', () => {
    resultado.textContent = desencriptar(texto.value.toLocaleLowerCase())
    Desaparer()
    texto.value = '';
})


// ! Captura evento del boton copiar y le asigna la funcion

btncopiar.addEventListener('click', () => {
    resultado.select();
    navigator.clipboard.writeText(resultado.textContent)
    texto.value = '';
    aparecer();
    texto.focus();
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        resultado.textContent = encriptar(texto.value.toLocaleLowerCase());
        Desaparer();
        texto.value = '';
    }
})


// ! Encriptar texto --------------------

const encriptar = (stringAencriptar) => {

    for (let i = 0; i < criptografia.length; i++) {
        if ( stringAencriptar.includes(criptografia[i][0]) ) {
            stringAencriptar = stringAencriptar.replaceAll(criptografia[i][0], criptografia[i][1])
        }
    }
    return stringAencriptar
}

// ! Desencripta el texto --------------------

const desencriptar = (stringAdesencriptar) => {
    
    for (let i = 0; i < criptografia.length; i++) {
        if (stringAdesencriptar.includes(criptografia[i][1])) {
            stringAdesencriptar = stringAdesencriptar.replaceAll(criptografia[i][1], criptografia[i][0])
        }    
    }
    return stringAdesencriptar
}


