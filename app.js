alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute < 0) {
        alert('Ops, número inválido! Escolha um valor maior que 0!');
        }
    else if (chute > numeroMaximo) {
        alert(`Ops, número inválido! Escolha um valor menor que ${numeroMaximo}`);
    }
    else {
        //se o chute for igual ao número secreto
        if (numeroSecreto == chute){
            break;
        }
        //senão
        else {
            if (chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}`);
            }
            else {
                alert(`O número secreto é maior que ${chute}`);
            }
            //tentativas = tentativas +1;
            tentativas++;
        }
    }
}

//Operador tenário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

//if (tentativas > 1) {
//    alert(`Isso ai, você descobriu o número secreto! ${numeroSecreto} com ${tentativas} tentativas!`);
//}
//else {
//    alert(`Isso ai, você descobriu o número secreto! ${numeroSecreto} com ${tentativas} tentativa!`);
//}

alert(`Isso ai, você descobriu o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
