const dadosProjetos = {
    "trabalhos": [
        
        {
            "id": 2,
            "titulo": "Studio Minimalista",
            "descricao": "Foco em formas puras, lines e iluminação altamente controlada.",
            "detalhes": "Trabalho realizado em estúdio fechado com fundo infinito escuro para realçar silhuetas e expressões marcantes.",
            "categoria": "Estúdio",
            "data": "2026-05-12",
            "autor": "Jed",
            "destaque": true,
            "imagem_principal": "IMG_0006.jpeg",
            "fotos_associadas": [
                { "id": 201, "titulo": "Formas Geométricas", "imagem": "IMG_0007.jpeg" }
            ]
        },
        {
            "id": 3,
            "titulo": "Olhar Editorial",
            "descricao": "Fotografias conceituais voltadas para capas de revistas de moda.",
            "detalhes": "Um ensaio focado no vestuário de alta costura misturado com expressões frias e ângulos não convencionais.",
            "categoria": "Moda",
            "data": "2026-05-15",
            "autor": "Jed",
            "destaque": false,
            "imagem_principal": "IMG_0011.jpeg",
            "fotos_associadas": [
                { "id": 301, "titulo": "Foco no Olhar", "imagem": "IMG_0009 (1).jpeg" }
            ]
        },
        {
            "id": 4,
            "titulo": "Sombras da Noite",
            "descricao": "Ensaios noturnos utilizando apenas iluminação neon das vitrines.",
            "detalhes": "Exploração de reflexos em poças de água e vidraças comerciais na madrugada com cores vibrantes azul e rosa.",
            "categoria": "Cenário Noturno",
            "data": "2026-05-18",
            "autor": "Jed",
            "destaque": false,
            "imagem_principal": "IMG_0004.jpeg",
            "fotos_associadas": [
                { "id": 401, "titulo": "Reflexo no Vidro", "imagem": "IMG_0003.jpeg" }
            ]
        },
        {
            "id": 5,
            "titulo": "Textura Fria",
            "descricao": "Uma visão analítica aproximada sobre elementos naturais.",
            "detalhes": "Ensaio focado em macrofotografia revelando detalhes de superfícies ásperas, rochas e cristais do ambiente.",
            "categoria": "Natureza",
            "data": "2026-05-20",
            "autor": "Jed",
            "destaque": false,
            "imagem_principal": "IMG_0005.jpeg",
            "fotos_associadas": [
                { "id": 501, "titulo": "Aproximação Máxima", "imagem": "IMG_0006.jpeg" }
            ]
        },
        {
            "id": 6,
            "titulo": "Retratos em P&B",
            "descricao": "A expressividade máxima através da ausência total de cores.",
            "detalhes": "Fotografias em preto e branco focadas estritamente nas linhas de expressão facial e contrastes intensos.",
            "categoria": "Retratos",
            "data": "2026-05-22",
            "autor": "Jed",
            "destaque": false,
            "imagem_principal": "IMG_0007.jpeg",
            "fotos_associadas": [
                { "id": 601, "titulo": "Contraste Puro", "imagem": "IMG_0011.jpeg" }
            ]
        }
    ]
};

function carregarHome() {
    const containerCarrossel = document.getElementById('conteudo-carrossel');
    if (containerCarrossel) {
        const itensDestaque = dadosProjetos.trabalhos.filter(t => t.destaque);
        containerCarrossel.innerHTML = itensDestaque.map((item, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${item.imagem_principal}" class="d-block w-100" alt="${item.titulo}">
                <div class="carousel-caption">
                    <h5>${item.titulo}</h5>
                    <p>${item.descricao}</p>
                    <a href="detalhe.html?id=${item.id}" class="btn btn-sm btn-danger">Acessar Detalhes</a>
                </div>
            </div>
        `).join('');
    }

    const gridPortfolio = document.getElementById('grid-portfolio');
    if (gridPortfolio) {
        gridPortfolio.innerHTML = dadosProjetos.trabalhos.map(item => `
            <div class="col-12 col-md-6 col-lg-4 card-trabalho">
                <div class="card-conteudo">
                    <a href="detalhe.html?id=${item.id}">
                        <img src="${item.imagem_principal}" alt="${item.titulo}">
                    </a>
                    <div class="card-corpo">
                        <h3>${item.titulo}</h3>
                        <p>${item.descricao}</p>
                        <a href="detalhe.html?id=${item.id}" style="color: #df0e62; text-decoration: none; font-size: 14px; font-weight: bold; display: inline-block; margin-top: 10px;">Ver Mais →</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function carregarDetalhes() {
    const blocoGeral = document.getElementById('bloco-info-geral');
    const gridFotos = document.getElementById('grid-fotos-vinculadas');

    if (!blocoGeral) return;

    const params = new URLSearchParams(window.location.search);
    const idDesejado = parseInt(params.get('id'));

    const trabalho = dadosProjetos.trabalhos.find(t => t.id === idDesejado);

    if (trabalho) {
        blocoGeral.innerHTML = `
            <div class="col-md-6 mb-4">
                <img src="${trabalho.imagem_principal}" class="detalhe-foto-principal shadow" alt="${trabalho.titulo}">
            </div>
            <div class="col-md-6">
                <div class="info-detalhe-bloco">
                    <h1 style="color: #df0e62; margin-bottom:15px;">${trabalho.titulo}</h1>
                    <p><strong>1. Categoria:</strong> ${trabalho.categoria}</p>
                    <p><strong>2. Data de Publicação:</strong> ${trabalho.data}</p>
                    <p><strong>3. Fotógrafo Autor:</strong> ${trabalho.autor}</p>
                    <p><strong>4. Resumo Técnico:</strong> ${trabalho.descricao}</p>
                    <hr style="border-color: #333;">
                    <p><strong>5. Detalhes Narrativos da Obra:</strong><br>${trabalho.detalhes}</p>
                </div>
            </div>
        `;

        if (trabalho.fotos_associadas && trabalho.fotos_associadas.length > 0) {
            gridFotos.innerHTML = trabalho.fotos_associadas.map(foto => `
                <div class="col-12 col-sm-6 col-md-4 mb-4">
                    <div class="foto-secundaria-box">
                        <img src="${foto.imagem}" alt="${foto.titulo}">
                        <p class="text-white mb-0" style="font-size:14px;">${foto.titulo}</p>
                    </div>
                </div>
            `).join('');
        } else {
            gridFotos.innerHTML = '<p class="text-muted">Nenhuma foto complementar vinculada.</p>';
        }
    } else {
        blocoGeral.innerHTML = '<h2 class="text-danger text-center w-100">Item não encontrado!</h2>';
    }
}

window.onload = () => {
    carregarHome();
    carregarDetalhes();
};