const divMsg = document.getElementById("mensagem-ola");
const divResposta = document.getElementById("resposta");

function mandarMsg() {
    const nome = document.getElementById("input-nome").value;
    const idade = document.getElementById("input-idade").value;
    const linguagem = document.getElementById("input-linguagem").value;

    if (nome != "" && idade != "" && linguagem != "") {
        const msg = `<p class='msg-ola'>Olá ${nome}! Você tem ${idade} anos e está aprendendo ${linguagem}! Que legal!</p>
       <p>Você gosta de estudar ${linguagem}? Digite o número 1 para SIM ou 2 para NÃO.</p>
       <input type='number' id='input-numero'><button type='button'onclick='mandarResposta()'>enviar</button>`

        divMsg.innerHTML = msg;
    }
}

function mandarResposta() {
    const numero = document.getElementById("input-numero").value;
    if (numero == 1) {
        const resposta = "Muito bom! Continue aprendendo e estudando para que você possa melhorar suas habilidades cada vez mais.";
        divResposta.innerHTML = resposta;
    } else if (numero == 2) {
        const resposta = "Sério? Você não gosta? Tente aprender outras linguagens de programação!";
        divResposta.innerHTML = resposta;
    } else {
        const resposta = "Resposta inválida";

        divResposta.innerHTML = resposta;
    }
}
