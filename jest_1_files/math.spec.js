
const {sum, subtract} = require('./math')

test('FROM root math.spec.js sum adds numbers', () => {
  const result = sum(8, 9)
  const expected = 17
  expect(result).toBe(expected)
})

test('FROM root math.spec.js subtract subtracts numbers', () => {
  const result = subtract(9, 3)
  const expected = 6
  expect(result).toBe(expected)
})
