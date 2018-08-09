const { getCollection } = require('../../queries/users')

module.exports = () =>
  async (req, h) => {
    try {
      const res = await req.db.query(getCollection(req))
      return { data: res.rows }
    } catch (err) {
      return h
        .code(400)
        .response({ errors: [err] })
    }
  }
