function insertItem(array, action) {
  return [
    ...array.slice(0, action.index),
    action.item,
    ...array.slice(action.index)
  ]
}

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      return item
    }
    return {
      ...item,
      ...action.item
    }
  })
}

function removeItem(array, action) {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)]
}

module.exports = {
  insertItem,
  updateObjectInArray,
  removeItem
}
