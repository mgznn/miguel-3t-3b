const url='https://raw.githubusercontent.com/timreis/api/refs/heads/main/assun.js'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o flamengo tem <span>${dados.Flamengo}</span> milhões de torcedores, o corinthians <span>${dados.Corinthians}</span> milhões, o Palmeiras <span>${dados.Palmeiras}</span> , o são paulo <span>${dados.Sao_Paulo}</span> ,o Gremio <span>${dados.Gremio}</span>.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()