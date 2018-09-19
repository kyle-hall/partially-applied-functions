
const partApply = require('./paf')

describe('partApply', () => {
  test('should return 5 when partially applying an adder', () => {
    const add = (x, y) => x + y

    const partiallyAppliedAdder = partApply(add, 3)

    expect(5).toEqual(partiallyAppliedAdder(2))
  })

  test('should work on functions with more than 2 arguments', () => {
    const stringBuilder = (x, y, z) => `${x} ${y} ${z}`

    const partiallyAppliedStringBuilder = partApply(stringBuilder, "one")

    expect(partiallyAppliedStringBuilder("two", "three")).toEqual("one two threed")
  })
})
