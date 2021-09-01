let pontosCruzeiro = 0, pontosFlamengo = 0;
let empateCruzeiro = 0, empateFlamengo = 0;
let derrotaCruzeiro = 0, derrotaFlamengo = 0;

let btVitoriaCruzeiro = document.querySelector("#vitoria-cruzeiro");


btVitoriaCruzeiro.onclick = () => {
  pontosCruzeiro += CalcularPontos("vitória");
  AtualizaTabelaPontos("cruzeiro");
}


let btVitoriaFlamengo = document.querySelector("#vitoria-flamengo");


btVitoriaFlamengo.onclick = () => {
    pontosFlamengo += CalcularPontos("vitória");
    AtualizaTabelaPontos("flamengo");
}


function CalcularPontos(resultado){
    if(resultado == "vitória"){
        return 3;
    }else if(resultado == "empate"){
        return 1;
    }else if(resultado == "derrota"){
        return 1;
    }
}
 
function AtualizaTabelaPontos(time){
    if(time == "cruzeiro"){
        document.querySelector(".pontos-cruzeiro").innerText = pontosCruzeiro;
        document.querySelector(".pontos-cruzeiro-empate").innerText = empateCruzeiro;
        document.querySelector(".pontos-cruzeiro-derrota").innerText = derrotaCruzeiro;
    }else if(time == "flamengo"){
        document.querySelector(".pontos-flamengo").innerText = pontosFlamengo;
        document.querySelector(".pontos-flamengo-empate").innerText = empateFlamengo;
        document.querySelector(".pontos-flamengo-derrota").innerText = derrotaFlamengo;
    }
}


let btEmpateCruzeiro = document.querySelector("#empate-cruzeiro");
btEmpateCruzeiro.onclick = () => {
empateCruzeiro += CalcularPontos("empate");
AtualizaTabelaPontos("cruzeiro")
};

let btDerrotaCruzeiro = document.querySelector("#derrota-cruzeiro");
btDerrotaCruzeiro.onclick = () => {
derrotaCruzeiro += CalcularPontos("derrota");
AtualizaTabelaPontos("cruzeiro")
};



let btEmpateFlamengo = document.querySelector("#empate-flamengo");
btEmpateFlamengo.onclick = () => {
empateFlamengo += CalcularPontos("empate");
AtualizaTabelaPontos("flamengo")
};

let btDerrotaFlamengo = document.querySelector("#derrota-flamengo");
btDerrotaFlamengo.onclick = () => {
derrotaFlamengo += CalcularPontos("derrota");
AtualizaTabelaPontos("flamengo")
};

