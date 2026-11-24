document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome != "" && email != "" && mensagem != "") {
        alert("Mensagem enviada com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Alternar tema
let botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botaoTema.textContent = "☀";
    } else {
        botaoTema.textContent = "☾";
    }
});