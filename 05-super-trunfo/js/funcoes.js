const naruto = {
    nome: "Naruto",
    imagem: "img/naruto.png",
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 2
    }
};

const batman = {
    nome: "Batman",
    imagem: "img/batman.jpg",
    atributos: {
        ataque: 6,
        defesa: 8,
        magia: 0
    }
};

const harry = {
    nome:"Harry Potter",
    imagem: "img/harry.jpg",
    atributos: {
        ataque: 8,
        defesa: 5,
        magia:10
    }
};

const bulba = {
    nome: "Bulba",
    imagem: "img/bulba.png",
    atributos:{
        ataque: 4,
        defesa: 7,
        magia: 2
    }
};

const caitlyn = {
    nome: "Caitlyn",
    imagem: "img/Caitlyn.jpg",
    atributos:{
        ataque: 6,
        defesa:9,
        magia:7
    }
};

const cartas = [naruto, batman, harry, bulba, caitlyn];
let cartaJogador, cartaMaquina;


function SortearCarta() {
    const numeroDeCartas = 5;
    let numeroCartaJogador = parseInt(Math.random() * numeroDeCartas);
    let numeroCartaMaquina = parseInt(Math.random() * numeroDeCartas);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * numeroDeCartas);
    }
    cartaJogador = cartas[numeroCartaJogador];
    cartaMaquina = cartas[numeroCartaMaquina];

}

function ExibirCartaJogador() {
    let divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
   document.querySelector(".nome-personagem-jogador").innerText = cartaJogador.nome;
   let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
   listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);
}

function ExibirCartaMaquina(){
    let divCartaMaquina =  document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    document.querySelector(".nome-personagem-maquina").innerText = cartaMaquina.nome;
    let listaDeAtributosDaCarta = document.querySelector(".atributos-maquina");
    listaDeAtributosDaCarta.innerHTML = PegarAtributosMaquina(cartaMaquina.atributos);

}
function PegarAtributosMaquina(atributosDaCarta){
let listaDeAtributos = "";
for(let atributo in atributosDaCarta){
    listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]}</li>`;
}
return listaDeAtributos;
}

function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "", botaoRadio="";
    for(let atributo in atributosDaCarta){
        botaoRadio = `<input type="radio" name="atributo" value="${atributo}">`;
        listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]} ${botaoRadio}</li>`;
    }
    return listaDeAtributos;
};


const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () => {

    SortearCarta();
ExibirCartaJogador();
document.querySelector("#btnJogar").disabled = false;
};

const btnJogar = document.querySelector("#btnJogar");
btnJogar.onclick = () => {
    ExibirCartaMaquina();
   let atributoEscolhido =  document.querySelector("input[name='atributo']:checked").value;
   let atributoJogador = cartaJogador.atributos[atributoEscolhido];
   let atributoMaquina = cartaMaquina.atributos[atributoEscolhido];

   if(atributoJogador == atributoMaquina){
       document.querySelector("#resultado").innerHTML = "<h1>EMPATE</h1>";
   }else if(atributoJogador > atributoMaquina){
       document.querySelector("#resultado").innerHTML = "<h1>Jogador Venceu!</h1>";
   }else if(atributoJogador < atributoMaquina){
       document.querySelector("#resultado").innerHTML = "<h1>M??quina Venceu!</h1>";
   }
};