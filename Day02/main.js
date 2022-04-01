const divMsg = document.getElementById("mensagem-ola");
const divResposta = document.getElementById("resposta");

function mandarMsg() {
    const nome = document.getElementById("input-nome").value;
    const idade = document.getElementById("input-idade").value;
    const linguagem = document.getElementById("input-linguagem").value;

    if (nome != "" && idade != "" && linguagem != "") {
        const msg = `<p class='msg-ola'>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</p>
       <p>Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.</p>
       <input type='number' id='input-numero'><button type='button'onclick='mandarResposta()'>enviar</button>`

        divMsg.innerHTML = msg;
    }
}
function mandarResposta() {
    const numero = document.getElementById("input-numero").value;
    if (numero == 1) {
        const resposta = "Que legal! Continue estudando que você ficará muito bom!.";
        divResposta.innerHTML = resposta;
    } else if (numero == 2) {
        const resposta = "Sério? Que pena! Já pensou em aprender outras linguagens?";
        divResposta.innerHTML = resposta;
    } else {
        const resposta = "Resposta inválida";
        divResposta.innerHTML = resposta;
    }
}