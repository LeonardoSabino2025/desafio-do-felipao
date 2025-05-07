function classificarHeroi() {
  const nomeHeroiInput = document.getElementById("nomeHeroi");
  const xpHeroiInput = document.getElementById("xpHeroi");
  const resultadoDiv = document.getElementById("resultado");
  const tentarOutroBotao = document.getElementById("tentarOutro");

  const nome = nomeHeroiInput.value;
  const xpString = xpHeroiInput.value;
  const xp = parseInt(xpString);

  if (nome.length < 4 || !/^[A-Z].*/.test(nome)) {
    resultadoDiv.textContent =
      "Erro: O nome do Herói deve ter no mínimo 4 letras e começar com uma letra maiúscula.";
    tentarOutroBotao.disabled = true; // Desabilita novamente em caso de erro
    return;
  }

  if (isNaN(xp)) {
    resultadoDiv.textContent =
      "Erro: Por favor, digite um valor numérico válido para a XP.";
    tentarOutroBotao.disabled = true; // Desabilita novamente em caso de erro
    return;
  }

  let nivel;

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  resultadoDiv.textContent = `O Herói de nome ${nome} está no nível de ${nivel}`;
  tentarOutroBotao.disabled = false; // Habilita o botão após a classificação
}

function resetarPagina() {
  document.getElementById("nomeHeroi").value = "";
  document.getElementById("xpHeroi").value = "1000"; // Reinicia com o valor inicial
  document.getElementById("resultado").textContent = "";
  document.getElementById("tentarOutro").disabled = true; // Desabilita novamente
}

window.onload = function () {
  const audio = document.querySelector("audio");
  if (audio) {
    audio.volume = 0.1;
  }
};
