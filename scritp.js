/*const circulo = document.querySelector("#circulo");

function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);*/

/*--------------------------------------------*/

/*Exercício de botão*/

const botao = document.querySelector("button");

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;

  if (total <= 10) {
    div.innerText = total;
  } else {
    div.innerText = "Impossível adicionar mais um";
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
