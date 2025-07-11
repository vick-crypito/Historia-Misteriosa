document.addEventListener("DOMContentLoaded", () => {
  const telas = document.querySelectorAll("div[id^='tela']");

  // 🔄 Recupera a última tela salva
  const telaSalva = localStorage.getItem("telaAtual");
  if (telaSalva) {
    telas.forEach(tela => tela.style.display = "none");
    const telaInicial = document.getElementById(telaSalva);
    if (telaInicial) telaInicial.style.display = "block";
  }

  // Mudança de telas com botões data-tela
  document.body.addEventListener("click", function (e) {
    const botao = e.target.closest("button[data-tela]");
    if (botao) {
      const proximaTela = botao.getAttribute("data-tela");
      telas.forEach(tela => tela.style.display = "none");

      const destino = document.getElementById(proximaTela);
      if (destino) {
        destino.style.display = "block";

        // 💾 Salva a tela atual no localStorage
        localStorage.setItem("telaAtual", proximaTela);
      }
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

  // 🔔 Alerta antes de sair ou recarregar
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = '';
  });
});




