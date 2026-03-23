const cadastrarProduto = require('../src/produtoService')
const { listarProdutos, limparBanco } = require('../src/produtoDB')

describe('produtoService', () => {
  beforeEach(() => {
    limparBanco()
  })

  test('produto cadastrado', () => {
    const resultado = cadastrarProduto({ nome: 'PlayStation 5' })

    const produtos = listarProdutos()

    expect(resultado).toBe(true)
    expect(produtos.length).toBe(1)
  })

  test('produto sem nome', () => {
    const resultado = cadastrarProduto({})

    const produtos = listarProdutos()

    expect(resultado).toBe(false)
    expect(produtos.length).toBe(0)
  })
})