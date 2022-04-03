let numeroPensado = Math.round(Math.random() * 10)

let tentativa = 1;
let input = document.querySelector("input")

function verifica() {
  if (input.value == numeroPensado) {
    alert(`Você acertou o número pensado foi ${numeroPensado}`)
  }
  else if (tentativa < 4) {
    alert(`Você tentou o número ${input.value} e errou. ${4 - tentativa} tentativas restantes.`)
    tentativa++
  }
  else {
    alert(`Você tentou o número ${input.value} e errou;`)
    alert(`Você errou todas as tentativas, o número pensado foi ${numeroPensado} \n Boa sorte na próxima vez! :)`)
  }

  input.value = ""
}

const button = document.querySelector("button")
button.onclick = verifica