function CarregarAnimes() {
let objetoAnimes = [
    {
        foto:"neverland.jpg",
        nome:"The Promised Nerverland"
    },
    {
        foto:"dragonboll.jpg",
        nome:"DragonBoll"
    },
    {
        foto:"pokemon.jpg",
        nome:"Pokemón"
    }

]
let listaAnimes = document.querySelector(".lista-animes");
let cartao = "";
for(let i = 0; i < objetoAnimes.length; i++){
    cartao += "<div class='cartao'>";
    cartao += "<img src='img/" + objetoAnimes[i].foto + "'>";
    cartao += objetoAnimes[i].nome;
    cartao += "</div>"
}
listaAnimes.innerHTML = cartao

}
window.onload = function () {
    CarregarAnimes();
}