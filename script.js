// Mensagem de boas-vindas
window.onload = function() {
    console.log("Bem-vindo ao projeto Agro Forte, Futuro Sustentável!");
};

// Função para destacar seções quando clicadas
function destacarSecao(secao) {
    secao.style.backgroundColor = "#dcedc8";

    setTimeout(() => {
        secao.style.backgroundColor = "white";
    }, 1000);
}

// Adiciona interação às seções
document.addEventListener("DOMContentLoaded", () => {
    const secoes = document.querySelectorAll("section");

    secoes.forEach(secao => {
        secao.addEventListener("click", () => {
            destacarSecao(secao);
        });
    });
});
