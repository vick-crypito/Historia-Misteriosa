document.addEventListener("DOMContentLoaded", () => {
  // Mudança de telas com botões data-tela
  document.body.addEventListener("click", function (e) {
    const botao = e.target.closest("button[data-tela]");
    if (botao) {
      const proximaTela = botao.getAttribute("data-tela");
      const telas = document.querySelectorAll("div[id^='tela']");
      telas.forEach(tela => tela.style.display = "none");

      const destino = document.getElementById(proximaTela);
      if (destino) destino.style.display = "block";
    }
  });

  // Mostrar os botões ao clicar em um card
  const cards = document.querySelectorAll(".card-personagem");
cards.forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".botoes-escolha").forEach(b => b.style.display = "none");
    const botoes = card.querySelector(".botoes-escolha");
    botoes.style.display = "flex";
    botoes.style.justifyContent = "center";
    botoes.style.gap = "10px";
  });
});
});



