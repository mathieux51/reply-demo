module.exports = req => (acc, cur, index) => {
  if (cur.id === req.params.id) acc = { index, cur }
  return acc
}
