ol {
padding: 40px;
}
<button class="botao-ajuda">Fechar</button>
.modal-fundo {
display: none;
position: fixed;
z-index: 1000;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
}
<script src="script.js"></script>
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-ajuda");
let modal = document.querySelector(".botao-ajuda");
<button class="botao-ajuda botao-fechar">Fechar</button>
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-ajuda");
let modal = document.querySelector(".modal-fundo");
btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);
function abreModal() {
modal.style.display = "block";
}

function fechaModal() {
modal.style.display = "none";
}

// TAMANHO DE FONTES
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;
let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto");
btnAumentaFonte.addEventListener("click", aumentaFonte);
btnDiminuiFonte.addEventListener("click", diminuiFonte);
function aumentaFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}
function diminuiFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}
// LEITURA DE TELA
let lendo = false;

const btnLeitura = document.getElementById("btnVoz");

btnLeitura.addEventListener("click", lerEmVozAlta);

function lerEmVozAlta() {
    let conteudo = document.querySelector("main");
}

function lerEmVozAlta() {
    let conteudo = document.querySelector("main");
    let texto = conteudo.innerText;
}