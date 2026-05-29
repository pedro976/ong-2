//matricula908683
const dadosTrabalhos = [
    {
        "id": 1,
        "titulo": "Ensaio Casual",
        "descricao": "Fotografia de retrato com iluminação natural.",
        "imagem": "IMG_0004.jpeg",
        "categoria": "Retratos",
        "detalhes": "Este ensaio foi realizado ao ar livre focando na expressividade..."
    },
    {
        "id": 2,
        "titulo": "Texturas de Gelo",
        "descricao": "Exploração de formas e cores em glaciares.",
        "imagem": "IMG_0006.jpeg",
        "categoria": "Natureza",
        "detalhes": "Captura em alta resolução focando nas fissuras do gelo azul..."
    }
];
const params = new URLSearchParams(window.location.search);
const idDesejado = params.get('id');

const trabalhoSelecionado = dadosTrabalhos.find(trabalho => trabalho.id === parseInt(idDesejado));
if (trabalhoSelecionado) {
    document.getElementById('titulo').textContent = trabalhoSelecionado.titulo;
    document.getElementById('descricao').textContent = trabalhoSelecionado.descricao;
    document.getElementById('detalhes').textContent = trabalhoSelecionado.detalhes;
    document.getElementById('imagem').src = trabalhoSelecionado.imagem;
}
else{
    document.getElementById('titulo').textContent = "Trabalho não encontrado";
    document.getElementById('descricao').textContent = "";
    document.getElementById('detalhes').textContent = "";
    document.getElementById('imagem').src = "";
}

