alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 10");
 
//se o chute for = ao número secreto
if (numeroSecreto == chute){
    alert(`Isso ai, você descobriu o número secreto! ${numeroSecreto}`);
}
//senão
else {
    alert("Você errou =(");
}