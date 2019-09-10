const {multiply, divide} = require('../math2')

test('FROM __tests__ math2.test.js  multiply numbers', () => {
  const result = multiply(3, 7)
  const expected = 21
  expect(result).toBe(expected)
})

test('FROM __tests__ math2.test.js divide numbers', () => {
  const result = divide(10, 5)
  const expected = 2
  expect(result).toBe(expected)
})
