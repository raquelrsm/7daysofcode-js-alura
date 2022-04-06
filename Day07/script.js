const tela = document.getElementById('tela');
let hasDot = false;
let firstNum = 0;
let secondNum = 0;
let currentOperation = '';
let operationClicked = false;

function focusTela(){
  tela.focus();
}

function insertNum(num) {
  if (num == '.'){
    handleDot();
    return;
  }
  if (operationClicked == true){
    clearTela(false);
    operationClicked = false;
  }
  focusTela();
  tela.value += num;
}

function handleDot() {
  if (hasDot == false){
    tela.value += '.';
      hasDot = true;
    }
  focusTela();
}

function clearTela(clear){
  if (clear) {
    firstNum = 0;
    secondNum = 0;
    operationClicked = false;
  }
  tela.value = '';
  hasDot = false;
  focusTela();
}

function operation(sign) {
  if (tela.value == ''){
    firstNum = 0;
  } else {
    firstNum = parseFloat(tela.value);
  }
  currentOperation = sign;
  operationClicked = true;
  focusTela();
}

function result(){
  secondNum = parseFloat(tela.value);
  operationClicked = true;
  if (currentOperation == '/') {
    tela.value = firstNum/secondNum;
    firstNum = 0;
  } else if (currentOperation == '*'){
    tela.value = firstNum*secondNum;
    firstNum = 0;
  } else if (currentOperation == '-') {
    tela.value = firstNum-secondNum;
    firstNum = 0;
  } else if (currentOperation == '+'){
    tela.value = firstNum+secondNum;
    firstNum = 0;
  }
  focusTela();
}

focusTela();