const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtraLivros))

function filtraLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    console.log(categoria);
    let livrosFiltrados = categoria == 'disponivel'? filtrarPorDisponibilidade() :filtrarPorCategoria(categoria);
    exibirLivros(livrosFiltrados);
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorDeLivrosDisponiveis(livrosFiltrados);
        console.log(valorTotal);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valor){
    elementoComValorTotalDosLivrosDisponiveis.innerHTML=`
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
        </div>
    `
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}
