// Função para transformar o link em formato embed
function transformarLink(linkA) {
    const url = new URL(linkA);
    const videoId = url.pathname.split('/')[1];
    const searchParams = url.search;
    const linkB = `https://www.youtube.com/embed/${videoId}${searchParams}`;
    return linkB;
}

// Carregar os vídeos do localStorage ao iniciar a página
let listaVideos = JSON.parse(localStorage.getItem('videos')) || [];
atualizarLista();

// Função para adicionar um novo vídeo
document.querySelector('.botao_enviar').onclick = function () {
    const link = document.querySelector('#link_video').value;
    if (link) {
        const linkTransformado = transformarLink(link);
        listaVideos.push(linkTransformado);
        console.log(listaVideos);
        document.querySelector('#link_video').value = '';

        // Salvar a lista de vídeos no localStorage
        localStorage.setItem('videos', JSON.stringify(listaVideos));

        atualizarLista();
    }
}

// Função para atualizar a lista de vídeos exibidos
function atualizarLista() {
    const videoList = document.getElementById('videoList');
    videoList.innerHTML = ''; // Limpar a lista antes de atualizar
    listaVideos.forEach(link => {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'video';
        videoDiv.innerHTML = `
            <iframe width="560" height="315" src="${link}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
        videoList.appendChild(videoDiv);
    });
}
