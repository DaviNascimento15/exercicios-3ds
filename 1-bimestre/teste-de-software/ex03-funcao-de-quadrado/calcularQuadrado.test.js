const calcularQuadrado = require('./index')

describe('calcularQuadrado', () => {
  test('5 ao quadrado deve ser 25', () => {
    const resultado = calcularQuadrado(5)
    expect(resultado).toBe(25)
  })
})