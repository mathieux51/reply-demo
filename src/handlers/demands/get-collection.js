module.exports = () => async (req, h) => {
  try {
    return { data: (await req.db).demands }
  } catch (err) {
    return h.code(400).response({ errors: [err] })
  }
}
