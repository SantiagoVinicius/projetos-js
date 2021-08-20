function Converter(){
    const enderecoAPI = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    let valorCotacaoDolar = 0;
    $.ajax({
        url: enderecoAPI,
        async: false,
        error: function(erro){
            console.log("Erro ao consultar API:");
            console.log(erro.responseJSON.message);
        },
        success: function(dados){
            valorCotacaoDolar = dados.USDBRL.low;
        }
    });
    let valorEmDolar = document.querySelector("#valorEmDolar").value;
    let valorEmReal = (valorEmDolar * valorCotacaoDolar).toFixed(2);
    document.querySelector("#valorEmReal").value = valorEmReal;
}
/*

/*fetch(enderecoAPI)
.then((response) => response.json())
.then(function(dados){
console.log(dados.USDBRL.low);
});*/


    // let valorEmDolar = document.querySelector("#valorEmDolar").value;

    // let valorEmReal = (valorEmDolar * valorCotacaoDolar).toFixed(2);

    // document.querySelector("#valorEmReal").value = valorEmReal;


// window.onload = function(){
//     Converter();
// }

// let botao = document.getElementById("btnConverter");
// botao.onclick = function(){
//     Converter();
// }

let botao = document.querySelector("#btnConverter");

botao.onclick = function(){
    Converter();
}
