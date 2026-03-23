const descontoController = require('../src/descontoController')

describe('descontoController', () => {
  test('retorna valor com desconto', () => {
    const req = {
      body: { valor: 200 }
    }

    const res = {
      json: jest.fn()
    }

    descontoController(req, res)

    expect(res.json).toHaveBeenCalledWith({
      valorFinal: 180
    })
  })
})