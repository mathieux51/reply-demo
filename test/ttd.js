const { expect } = require('code')
const Lab = require('lab')
const { suite, test } = (exports.lab = Lab.script())

suite('math', () => {
  test('returns true when 1 + 1 equals 2', () => {
    expect(1 + 1).to.equal(2)
  })
})
