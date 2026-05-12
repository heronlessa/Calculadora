// codigo_melhorado.js
// Revisado por IA (Senior Engineer):
// - Removido var → const
// - Removido parâmetro string mágico → funções separadas
// - Adicionado guard de divisão por zero
// - Adicionado validação de tipos
// - Adicionado operador === no lugar de ==

const operations = {
  soma: (a, b) => a + b,
  sub:  (a, b) => a - b,
  mult: (a, b) => a * b,
  div:  (a, b) => {
    if (b === 0) throw new Error('Divisão por zero');
    return a / b;
  },
};

const calc = (a, b, op) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Operandos devem ser números');
  }
  if (!operations[op]) {
    throw new Error(`Operação inválida: ${op}`);
  }
  return operations[op](a, b);
};

module.exports = { calc };
