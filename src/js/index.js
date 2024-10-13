const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        escondercartaopokedev(); 

        const idPokedevSelecionado = mostracartaoPodev(pokedev);

        esconderPokedevNalistagem();
        ativarPokedevNalstagem(idPokedevSelecionado);
    })
})

function ativarPokedevNalstagem(idPokedevSelecionado) {
    const PokedevSelecionadoNalistagem = document.getElementById(idPokedevSelecionado);
    PokedevSelecionadoNalistagem.classList.add("ativo");
}

function esconderPokedevNalistagem() {
    const pokedevAtivoNalistagem = document.querySelector(".ativo");
    pokedevAtivoNalistagem.classList.remove("ativo");
}

function mostracartaoPodev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function escondercartaopokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

