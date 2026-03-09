const calcularTaxa = require('../src/services/taxaService')

describe('taxaService', () => {

  let valor

  beforeEach(() => {
    valor = 0
  })

  test('deve retornar 5% quando valor for maior que 500', () => {
    valor = 600
    const resultado = calcularTaxa(valor)

    expect(resultado).toBe(30)
  })

  test('deve retornar 0 quando valor for menor ou igual a 500', () => {
    valor = 400
    const resultado = calcularTaxa(valor)

    expect(resultado).toBe(0)
  })

})