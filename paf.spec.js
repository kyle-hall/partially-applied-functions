
const partApply = require('./paf')

describe('partApply', () => {
  test('should return 5 when partially applying an adder', () => {
    const add = (x, y) => x + y

    const partiallyAppliedAdder = partApply(add, 3)

    expect(5).toEqual(partiallyAppliedAdder(2))
  })
})
