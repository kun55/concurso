function jugar() {
  var numeroUsuario = parseInt(document.getElementById("numero").value);
  var fichas = parseInt(document.getElementById("fichas").value);
  var numeroAleatorio = Math.floor(Math.random() * 37) ;

  if (numeroUsuario === numeroAleatorio) {
    fichas *= 36;
    document.getElementById("mensaje").innerHTML = "¡Ganaste!";
    document.getElementById("resultado").innerHTML = "Ganaste " + fichas + " fichas";
  } else {
    fichas = 0;
    document.getElementById("mensaje").innerHTML = "Lo siento, perdiste el numero es "+numeroAleatorio;
    document.getElementById("resultado").innerHTML = "Perdiste todas tus fichas";
  }

  document.getElementById("fichas").value = fichas;
}
