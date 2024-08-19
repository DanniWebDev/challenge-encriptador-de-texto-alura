function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let textArea = document.getElementById("outputText");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = ""; 
        textArea.value = textoCifrado; 
        tituloMensaje.textContent = "¡Texto encriptado con éxito!";
        parrafo.textContent = "";
        textArea.classList.add("sin-imagen");
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        alert("¡Debes ingresar un texto!");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let textArea = document.getElementById("outputText");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = "";  
        textArea.value = textoCifrado;
        tituloMensaje.textContent = "¡Texto desencriptado con éxito!";
        parrafo.textContent = "";
        textArea.classList.add("sin-imagen");
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        alert("¡Debes ingresar un texto!");
    }
}

function copiarTexto() {
    let textoEncriptado = document.getElementById("outputText");
    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(textoEncriptado.value)
}
