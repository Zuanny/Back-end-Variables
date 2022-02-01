let montante
let capitalInicial = 1000
let tempoMeses = 5
let jurosPorcentagem = 12.5
let juros = jurosPorcentagem / 100

montante = capitalInicial * (1 + juros) ** tempoMeses
console.log(`O montante ao final e: ${montante}`)
