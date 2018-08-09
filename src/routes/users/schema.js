const Joi = require('joi')

// const id = Joi.string().length(10).required()

module.exports = {
  user: {
    getCollection: {
    },
    getResource: {
      params: { id: Joi.number().integer() }
    }
  }
}
