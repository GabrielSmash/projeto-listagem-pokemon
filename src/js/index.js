// Botão troca de tema

// Armazenar botão troca de tema em uma busca por ID
const BotaoAlterarTema = document.getElementById("botao-alterar-tema");

// Armazenar imagem botão
const ImagemBotaoTrocaDetema = document.querySelector(".imagem-botao");

// Armazenar ambiente de trabalho Tag Body
const body = document.querySelector("body");



// Identificação de Clique do usuario
BotaoAlterarTema.addEventListener("click", () => {

    // Armazenar valor da classe Body com relação ao modo escuro
    const ModoEscuroAtivo = body.classList.contains("modo-escuro");

    //Altera entre tirar e adicionar classes
    body.classList.toggle("modo-escuro");

    // Idenficando classe modo escuro no Body
    if (ModoEscuroAtivo) {
        //Voltando imagens para lua
        ImagemBotaoTrocaDetema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        // Trocando Imagem para Lua
        ImagemBotaoTrocaDetema.setAttribute("src", "./src/imagens/moon.png");

    }

});

