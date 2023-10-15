function mudarImagem() {
  document.getElementById("imagemhtml").src = "assets/htmlHover.png";
}

function reverterImagem() {
  document.getElementById("imagemhtml").src = "assets/html.png";
}

function mudarImagem1() {
  document.getElementById("imagemcss").src = "assets/cssHover.png";
}

function reverterImagem1() {
  document.getElementById("imagemcss").src = "assets/css.png";
}
function mudarImagem2() {
  document.getElementById("imagemjs").src = "assets/javascriptHover.png";
}

function reverterImagem2() {
  document.getElementById("imagemjs").src = "assets/javascript.png";
}

function mudarStyle() {
  var elemento = document.getElementById("imagemRocketseat");
  elemento.style.outline = "5px solid gold";
  elemento.style.boxShadow = "5px 5px 36px 14px #8A0A1C";
}

function reverterStyle() {
  var elemento = document.getElementById("imagemRocketseat");
  elemento.style.outline = "none";
  elemento.style.boxShadow = "none";
}
