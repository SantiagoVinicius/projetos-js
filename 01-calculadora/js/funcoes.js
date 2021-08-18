function Converter(){

    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    $.getJSON(url, function(dados){
        const valorCotacaoDolar = dados.USDBRL.low;

        let valorEmDolar = document.querySelector("#valorEmDolar").value;

        let valorEmReal = (valorEmDolar * valorCotacaoDolar).toFixed(2);

        document.querySelector("#valorEmReal").value = valorEmReal;

    })
}
    // 

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
