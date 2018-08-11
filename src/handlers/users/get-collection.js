// const { getCollection } = require('../../queries/users')

module.exports = () => async (req, h) => {
  try {
    return { data: (await req.db).users }
  } catch (err) {
    return h.code(400).response({ errors: [err] })
  }
}
