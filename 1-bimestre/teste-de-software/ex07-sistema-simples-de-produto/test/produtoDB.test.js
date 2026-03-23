const {
  adicionarProduto,
  listarProdutos,
  limparBanco
} = require('../src/produtoDB')

describe('mock de produtos', () => {
  beforeEach(() => {
    limparBanco()
  })

  test('banco começa vazio', () => {
    const produtos = listarProdutos()
    expect(produtos.length).toBe(0)
  })

  test('produto é adicionado', () => {
    adicionarProduto({ nome: 'Caneta' })

    const produtos = listarProdutos()
    expect(produtos.length).toBe(1)
  })
})