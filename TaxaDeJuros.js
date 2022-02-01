let i
let m = 90000
let c = 60000
let t = 24

i = (Math.pow(m / c, 1 / t) - 1) * 100

console.log(
  `O seu Financiamento de ${c} reais teve uma taxa de juros ${i}%, pois apos ${t} meses voce teve que pagar ${m} reais`
)
