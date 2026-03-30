const tarefas = []

function salvarTarefa(descricao) {
  tarefas.push(descricao)
}

function totalTarefas() {
  return tarefas.length
}

function limparBanco() {
  tarefas.length = 0
}

module.exports = {
  salvarTarefa,
  totalTarefas,
  limparBanco,
}