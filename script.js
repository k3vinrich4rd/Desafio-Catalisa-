const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#condicao1');

const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#condicao2');

const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#condicao3');



gerarValorAletorio = () => {
    return Math.floor(Math.random() *671);
}

pegarPersonagem = () => {
    let numeroAletorio = gerarValorAletorio();
    let numeroAletorio2 = gerarValorAletorio();
    let numeroAletorio3 = gerarValorAletorio();




    return fetch(`https://rickandmortyapi.com/api/character/${numeroAletorio1}`, {
        method: 'GET',
        headers: {
            Accept: 'application/jason',
            "Content-type": 'application/jason'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = data.status;
        
        
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;

        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;

    }); 
}
botao.onclick = pegarPersonagem;