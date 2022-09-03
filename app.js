let encriptar, decriptar, copy, textarea;
const eliminarBlancos = (text) => {
  while (text[0] == " ") {
    text = text.slice(1);
  }
  while (text[1] == " ") {
    text = text.slice(-1);
  }
  return text;
};
function encriptarTexto(text) {
  encriptar = text.replace(/e/g, "enter");
  encriptar = encriptar.replace(/i/g, "imes");
  encriptar = encriptar.replace(/a/g, "ai");
  encriptar = encriptar.replace(/o/g, "ober");
  encriptar = encriptar.replace(/u/g, "ufat");
  document.getElementById("textarea").value = ""; // para mostrar el texto encriptado
  if (encriptar == "") {
    document.getElementById("containerhidden").style.display = "none";
    document.getElementById("containertwo").style.display = "block";
  } else {
    document.getElementById("containerhidden").style.display = "flex";
    document.getElementById("containertwo").style.display = "none";
    document.getElementById("parrafo-escondido").innerHTML = encriptar;
    console.log(encriptar);
  }
  return encriptar;
}
function decriptarTexto(text) {
  decriptar = text.replace(/enter/g, "e");
  decriptar = decriptar.replace(/imes/g, "i");
  decriptar = decriptar.replace(/ai/g, "a");
  decriptar = decriptar.replace(/ober/g, "o");
  decriptar = decriptar.replace(/ufat/g, "u");
  document.getElementById("textarea").value = ""; // para mostrar el texto decriptado
  if (decriptar == "") {
    document.getElementById("containerhidden").style.display = "none";
    document.getElementById("containertwo").style.display = "block";
  } else {
    document.getElementById("containerhidden").style.display = "flex";
    document.getElementById("containertwo").style.display = "none";
    document.getElementById("parrafo-escondido").innerHTML = decriptar;
    console.log(decriptar);
  }
  return decriptar;
}
const btnEncriptar = document.getElementById("btnone");
btnEncriptar.onclick = function (e) { // la e hace referencia a event
  e.preventDefault();
  textarea = document.getElementById("textarea").value;
  textarea = textarea.toLowerCase();
  textarea = textarea.replace(/[^a-zA-Z ]/g, ""); // quitar caracteres especiales
  textarea = eliminarBlancos(textarea);
  encriptarTexto(textarea);
  copy = encriptar;
};
const btnDecriptar = document.getElementById("btntwo");
btnDecriptar.onclick = function (e) {
  e.preventDefault();
  textarea = document.getElementById("textarea").value;
  textarea = textarea.toLowerCase();
  textarea = textarea.replace(/[^a-zA-Z ]/g, ""); // quitar caracteres especiales
  textarea = eliminarBlancos(textarea);
  decriptarTexto(textarea);
  copy = decriptar;
};

const btnClipboard = document.getElementById("btn-clipboard");
btnClipboard.onclick = function (e) {
  e.preventDefault();
  navigator.clipboard.writeText(copy);
}
