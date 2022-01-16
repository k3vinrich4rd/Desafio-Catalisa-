const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector('#nome1');
const especie = document.querySelector('#especie1');
const condicao = document.querySelector('#condicao1');

gerarValorAletorio = () => {
    return Math.floor(Math.random() *671);
}

pegarPersonagem = () => {
    let numeroAletorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAletorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/jason',
            "Content-type": 'application/jason'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status; 
    }); 
}
botao.onclick = pegarPersonagem;