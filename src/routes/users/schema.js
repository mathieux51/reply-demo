const Joi = require('joi')

module.exports = {
  getCollection: {},
  getResource: {
    params: {
      id: Joi.number()
        .integer()
        .required()
    }
  },
  postResource: {
    payload: {
      name: Joi.string()
        .min(2)
        .required(),
      gender: Joi.string()
        .min(1)
        .required(),
      age: Joi.number()
        .integer()
        .max(150)
    }
  },
  putResource: {
    params: {
      id: Joi.number()
        .integer()
        .required()
    },
    payload: {
      name: Joi.string().min(2),
      gender: Joi.string().min(1),
      age: Joi.number()
        .integer()
        .max(150)
    }
  }
}
