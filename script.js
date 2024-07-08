function transformarLink(linkA) {
    const url = new URL(linkA);
    const videoId = url.pathname.split('/')[1];
    const searchParams = url.search;
    const linkB = `https://www.youtube.com/embed/${videoId}${searchParams}`;
    return linkB;
}

let lsitaVideos = []

botaoEnviar = document.querySelector('.botao_enviar')

botaoEnviar.onclick = function () {

    link = document.querySelector('#link_video').value
    linkPronto = transformarLink(link)
    lsitaVideos.push(linkPronto)
    console.log(lsitaVideos)
    document.querySelector('#link_video').value = ''

    atualizarLista()
}


function atualizarLista() {
    const videoList = document.getElementById('videoList')
    videoList.innerHTML = ''
    lsitaVideos.forEach(link => {
        const videoDiv = document.createElement('div')
        videoDiv.className = 'video'
        videoDiv.innerHTML = `
            <iframe width="560" height="315" src="${link}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
        videoList.appendChild(videoDiv);
    })
}