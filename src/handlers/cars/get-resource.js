const { getResource } = require('../../queries/cars')

module.exports = () => async (req, h) => {
  try {
    const res = (await req.db).cars.filter(getResource(req))
    if (res.length === 0) throw { statusCode: 404, message: 'Not Found' }
    return { data: res[0] }
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
