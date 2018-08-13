const { putResource } = require('../../queries/cars')
const { updateObjectInArray } = require('../../utils')

module.exports = () => async (req, h) => {
  try {
    const db = await req.db
    const res = (await req.db).cars.reduce(putResource(req), {})
    if (!res.hasOwnProperty('index'))
      throw { statusCode: 404, message: 'Not Found' }
    const car = { ...res.cur, ...req.payload, id: res.cur.id }
    const cars = updateObjectInArray(db.cars, {
      index: res.index,
      item: car
    })
    db.cars = cars
    return { data: car }
  } catch (err) {
    return h.response({ errors: [err] }).code(err.statusCode || 400)
  }
}
