let montante
let capitalInicial = 1000
let tempoMeses = 3
let jurosPorcentagem = 15
let juros = jurosPorcentagem / 100

montante = capitalInicial * (1 + juros) ** tempoMeses
console.log(montante)
