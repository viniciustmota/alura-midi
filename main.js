function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    console.log(evento.code);

    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
    
    tocarSomPeloTecladoNumerico(evento);
  
}
tecla.onkeyup = function () {
  tecla.classList.remove("ativa");

  for(let contador = 0; contador < listaDeTeclas.length; contador++){
    listaDeTeclas[contador].classList.remove("ativa");
  }

};

}

function tocarSomPeloTecladoNumerico(evento) {
  
  if (evento.code === "Numpad1") {
    tocaSom("#som_tecla_psh");
    document.querySelector(".tecla_psh").classList.add("ativa");
  }
  if (evento.code === "Numpad2") {
    tocaSom("#som_tecla_tic");
    document.querySelector(".tecla_tic").classList.add("ativa");
  }
  if (evento.code === "Numpad3") {
    tocaSom("#som_tecla_tom");
    document.querySelector(".tecla_tom").classList.add("ativa");
  }
  if (evento.code === "Numpad4") {
    tocaSom("#som_tecla_puff");
    document.querySelector(".tecla_puff").classList.add("ativa");
  }
  if (evento.code === "Numpad5") {
    tocaSom("#som_tecla_splash");
    document.querySelector(".tecla_splash").classList.add("ativa");
  }
  if (evento.code === "Numpad6") {
    tocaSom("#som_tecla_toim");
    document.querySelector(".tecla_toim").classList.add("ativa");
  }
  if (evento.code === "Numpad7") {
    tocaSom("#som_tecla_pom");
    document.querySelector(".tecla_pom").classList.add("ativa");
  }
  if (evento.code === "Numpad8") {
    tocaSom("#som_tecla_clap");
    document.querySelector(".tecla_clap").classList.add("ativa");
  }
  if (evento.code === "Numpad9") {
    tocaSom("#som_tecla_tim");
    document.querySelector(".tecla_tim").classList.add("ativa");
  }
}
