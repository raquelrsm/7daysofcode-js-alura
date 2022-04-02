const radio = document.getElementsByName("stack");
const radio2 = document.getElementsByName("NextStack");
const radio3 = document.getElementsByName("simOuNao");
const divOpcao = document.getElementById("opcao");
const divOpcao2 = document.getElementById("opcao2");
const divOpcao3 = document.getElementById("opcao3");
const divOpcao4 = document.getElementById("opcao4");
const divOpcao5 = document.getElementById("opcao5");
const divOpcao6 = document.getElementById("opcao6");

var stackEscolhida;
var primeiraTec;


function escolherStack() {
    for (let i = 0; i < radio.length; i++){
        if (radio[i].checked == true){
            stackEscolhida = radio[i].value;
            divOpcao6.innerHTML = `<p>${stackEscolhida}</p>`;
            abrirStack(stackEscolhida);
        }
    }
}

function abrirStack(stack){
    if (stack == "front-end"){
        const msg = `<p>Parabéns, Front! Vamos continuar aprimorando sua formação!</p>
        <p>Deseja aprender React ou Vue?</p>
        <input type="text" id="react-vue">
        <button type="button" class="button" role="button" onclick="primeiraTec('react-vue')">Seguir</button>`
        divOpcao.innerHTML = msg;
    }
    if (stack == "back-end"){
        const msg = `<p>Parabéns, Back-ender! Vamos continuar aprimorando sua formação!</p>
        <p>Deseja aprender C# ou Java?</p>
        <input type="text" id="c-java">
        <button type="button" class="button" role="button" onclick="primeiraTec('c-java')">Seguir</button>`
        divOpcao.innerHTML = msg;
    }
}

function primeiraTec(Tecs){
    primeiraTec = document.getElementById(Tecs).value;
    divOpcao6.innerHTML += `<p>${primeiraTec}</p>`;
    escolherEspecializacao();
}

function escolherEspecializacao() {
    const msg = `<p>Show! Você continuará como um desenvolvedor ${stackEscolhida} ou se tornará fullstack!</p>
    <input type="radio" name="NextStack" id="frontOuBack" value="${stackEscolhida}"><label for="frontOuBack">${stackEscolhida}</label>
    <input type="radio" name="NextStack" id="fullstack" value="fullstack"><label for="fullstack">fullstack</label>
    <button type="button" class="button" role="button" onclick="selecionarEspecializacao()">Seguir</button>`
    divOpcao2.innerHTML = msg;
}

function selecionarEspecializacao(){
    for (let i = 0; i < radio2.length; i++){
        if (radio2[i].checked == true){
            const especializacaoEscolhida = radio2[i].value;
            const msg = `<p>Você agora é um dev ${especializacaoEscolhida} incrível!</p>`
            divOpcao3.innerHTML = msg;
            escolherOutrasTecs();
        }
    }
}

function escolherOutrasTecs() {
    const pergunta = `<p>Você gostaria de conhecer ou se especializar em outra tecnologia?</p>
    <input type="radio" name="simOuNao" id="sim" value="sim"><label for="sim">Sim</label>
    <input type="radio" name="simOuNao" id="nao" value="nao"><label for="nao">Não</label>
    <button type="button" button type="button" class="button" role="button" onclick="abrirInputTec()">Seguir</button>`
    divOpcao4.innerHTML = pergunta;
}

function abrirInputTec() {
    for (let i = 0; i < radio3.length; i++){
        if (radio3[i].checked == true){
            let alternativa = radio3[i].value;
            if (alternativa == "sim") {
                const msg = `<p>Qual?</p>
                <input type="text" id="tec">
                <button type="button" button type="button" class="button" role="button" onclick="guardarTec()">Seguir</button>`
                divOpcao4.innerHTML = msg;                
            } else {
                const msg = `<p>Parabéns pelo caminho traçado até aqui!</p>`;
                divOpcao5.innerHTML = msg;
            }
        }
    }
}

function guardarTec() {
    const tec = document.getElementById("tec").value;
    divOpcao6.innerHTML += `<p>${tec}</p>`;
    escolherOutrasTecs()
}