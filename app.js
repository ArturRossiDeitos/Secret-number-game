let numero = gerarNumeros();
let tentativas = 1;

function exibirEscritas(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function gerarNumeros() {
    return parseInt (Math.random() * 100 + 1);
 }
 
function mensagemInicial(){
exibirEscritas('h1', 'Jogo de adivinhar o número');
exibirEscritas('p', 'Escolha um número entra 1 e 100');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numero){
        exibirEscritas('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}`;
        exibirEscritas('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {

        if(chute > numero){
            exibirEscritas('p', `O número que você procura é menor que ${chute}`);
        }else{

            exibirEscritas('p', `O número que você procura é maior que ${chute}`);
        }
        tentativas++;
        limparTexto();
    }
}

function limparTexto(){
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo(){
    numero = gerarNumeros();
    limparTexto();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}




