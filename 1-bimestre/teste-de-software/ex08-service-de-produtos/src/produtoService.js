const { adicionarProduto } = require('./produtoDB')

function cadastrarProduto(produto) {
  if (!produto.nome) {
    return false
  }

  adicionarProduto(produto)
  return true
}

module.exports = cadastrarProduto