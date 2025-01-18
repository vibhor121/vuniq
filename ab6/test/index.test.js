const { findFirstUniqueChar } = require('../utils/uniqueChar');

test('findFirstUniqueChar: finds the first unique character', () => {
  expect(findFirstUniqueChar('keetnode')).toBe(0); // 'k'
  expect(findFirstUniqueChar('lovekeetnode')).toBe(2); // 'v'
  expect(findFirstUniqueChar('aabb')).toBe(-1); // No unique character
});
