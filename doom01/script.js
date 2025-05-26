// selecione o botão de alterar usando o método getElementById
var botao = document.getElementById("botao"); 

// adicione um evento de clique ao botão de alterar
botao.addEventListener("click", function() { 
    // selecione o parágrafo usando o método getElementById
    var paragrafo = document.getElementById("paragrafo"); 
    // altere o texto do parágrafo
    paragrafo.textContent = "O texto deste parágrafo foi alterado!"; 
});

// Crie um segundo botão chamado "limpar" que limpe o conteúdo do texto do parágrafo.
var botaoLimpar = document.getElementById("botaoLimpar");

botaoLimpar.addEventListener("click", function() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = "Clique no botão abaixo para alterar o texto deste parágrafo:"; 
});