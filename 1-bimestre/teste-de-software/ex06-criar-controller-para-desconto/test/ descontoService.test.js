const calcularDesconto = require('../src/descontoService')

describe('descontoService', () => {
  test('aplica 10% de desconto quando valor > 100', () => {
    const resultado = calcularDesconto(200)
    expect(resultado).toBe(180)
  })

  test('não aplica desconto quando valor <= 100', () => {
    const resultado = calcularDesconto(100)
    expect(resultado).toBe(100)
  })
})