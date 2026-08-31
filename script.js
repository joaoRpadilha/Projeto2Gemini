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
