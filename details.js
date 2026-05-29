const API_URL = "http://localhost:3000/trabalhos";

async function carregarDetalhes() {
    const blocoGeral = document.getElementById('bloco-info-geral');
    if (!blocoGeral) return;

   
    const params = new URLSearchParams(window.location.search);
    const idDesejado = params.get('id');

    if (!idDesejado) {
        blocoGeral.innerHTML = `
            <div class="col-12 text-center py-5">
                <h2 class="text-danger">ID não identificado na URL!</h2>
                <p class="text-muted">Volte para a página principal e selecione um item.</p>
            </div>`;
        return;
    }

    try {
     
        const response = await fetch(`${API_URL}/${idDesejado}`);
        
        if (!response.ok) {
            throw new Error("O item solicitado não existe no servidor.");
        }

        const trabalho = await response.json();

        
        const tagsHTML = trabalho.tags && trabalho.tags.length > 0 
            ? trabalho.tags.map(tag => `<span class="tag-chip">#${tag}</span>`).join('')
            : '<span class="text-muted">Sem tags</span>';

        
        blocoGeral.innerHTML = `
            <div class="col-md-6 mb-4">
                <img src="${trabalho.imagem}" class="img-fluid rounded shadow w-100" style="max-height: 550px; object-fit: cover;" alt="${trabalho.titulo}">
            </div>
            <div class="col-md-6">
                <div class="p-4" style="background: #1c1c1c; border-radius: 8px; border: 1px solid #333;">
                    <h1 style="color: #df0e62; margin-bottom:15px;" class="fw-bold">${trabalho.titulo}</h1>
                    <p class="fs-5 text-muted mb-4">${trabalho.descricaoCurta}</p>
                    
                    <p><strong>Categoria:</strong> <span class="badge bg-danger">${trabalho.categoria}</span></p>
                    <p><strong>Data de Publicação:</strong> ${trabalho.data}</p>
                    <p><strong>Fotógrafo Autor:</strong> ${trabalho.autor}</p>
                    <p class="fs-4 fw-bold mt-3" style="color: #df0e62;">Preço: ${trabalho.valor}</p>
                    
                    <hr style="border-color: #333;">
                    
                    <h5 class="text-white mt-3">Descrição Detalhada:</h5>
                    <p class="text-secondary" style="line-height: 1.6;">${trabalho.descricaoCompleta}</p>
                    
                    <h5 class="text-white mt-4">Tags do Ensaio:</h5>
                    <div class="mt-2">${tagsHTML}</div>
                </div>
            </div>
        `;

    } catch (error) {
        blocoGeral.innerHTML = `
            <div class="col-12 text-center py-5">
                <h2 class="text-danger">Item não encontrado!</h2>
                <p class="text-muted">${error.message}</p>
            </div>`;
    }
}

window.onload = carregarDetalhes;