const { expect } = require('code')
const Lab = require('lab')
const { suite, test } = (exports.lab = Lab.script())

const server = require('../../../src')

suite('Cannot remove a user for which at one least one booking exists', () => {
  test('DELETE: users/1', async () => {
    const options = {
      method: 'DELETE',
      url: '/users/1'
    }
    const err = {
      errors: [
        {
          message:
            'Cannot remove a user for which at one least one booking exists',
          statusCode: 400
        }
      ]
    }

    const response = await server.inject(options)
    expect(response.result).to.equal(err)
    expect(response.statusCode).to.equal(400)
  })
  test('DELETE: users/1', async () => {
    const options = {
      method: 'DELETE',
      url: '/users/0'
    }
    const response = await server.inject(options)
    expect(response.result).to.equal(null)
    expect(response.statusCode).to.equal(204)
  })
})
