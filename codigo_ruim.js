// codigo_ruim.js
var x = 0

function calc(a, b, op) {
  if(op == 'soma') return a + b
  if(op == 'sub')  return a - b
  if(op == 'mult') return a * b
  if(op == 'div')  return a / b  // bug: não verifica divisão por zero
}

module.exports = { calc }
