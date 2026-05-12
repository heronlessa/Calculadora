const { add, subtract, multiply, divide } = require('./calculator');

test('soma 2 + 3 = 5',        () => expect(add(2, 3)).toBe(5));
test('soma negativo -1 + 1',  () => expect(add(-1, 1)).toBe(0));

test('subtrai 10 - 4 = 6',    () => expect(subtract(10, 4)).toBe(6));
test('subtrai com negativo',   () => expect(subtract(3, 8)).toBe(-5));

test('multiplica 3 * 4 = 12', () => expect(multiply(3, 4)).toBe(12));
test('multiplica por zero',    () => expect(multiply(9, 0)).toBe(0));

test('divide 10 / 2 = 5',     () => expect(divide(10, 2)).toBe(5));
test('divide por zero lança erro', () =>
  expect(() => divide(10, 0)).toThrow('Divisão por zero')
);
