const { getResource } = require('../../queries/articles')

module.exports = () =>
  async (req, h) => {
    try {
      const res = await req.db.query(getResource(req))
      if (res.rows.length === 0)
        throw { statusCode: 404, message: 'Not Found' }
      return { data: res.rows[0] }
    } catch (err) {
      return h
        .response({ errors: [err] })
        .code(err.statusCode || 400)
    }
  }
