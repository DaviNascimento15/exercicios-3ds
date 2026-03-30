const { salvarTarefa } = require('../database/tarefaDatabase')

function cadastrarTarefa(descricao) {
  if (!descricao) {
    return false
  }

salvarTarefa(descricao)
  return true
}

module.exports = {
  cadastrarTarefa
}