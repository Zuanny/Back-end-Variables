// Celsius para Fahrenheit

let celsius
let fahrenheit = 55

function ConversaoCxF() {
  if (celsius != undefined) {
    fahrenheit = (celsius * 9) / 5 + 32
    console.log(
      `${celsius} graus Celsius em Fahrenheit e igual a : ${fahrenheit} `
    )
  } else if (fahrenheit != undefined) {
    celsius = ((fahrenheit - 32) * 5) / 9
    console.log(
      `${fahrenheit} graus Fahrenheit em CELSIUS e igual a : ${celsius} `
    )
  } else {
    console.log('Nenhuma Temperatura digitada')
  }
}

ConversaoCxF()
