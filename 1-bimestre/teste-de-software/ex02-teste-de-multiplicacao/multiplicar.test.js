const multiplicar = require('./index')

describe('multiplicar', () => {
  test('2 x 3 deve ser 6', () => {
    const resultado = multiplicar(2, 3)
    expect(resultado).toBe(6)
  })
})