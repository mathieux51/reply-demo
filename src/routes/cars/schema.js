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
      model: Joi.string()
        .min(2)
        .required(),
      engine: Joi.string()
        .min(5)
        .required(),
      infotainmentSystem: Joi.array().items(Joi.string().min(2)),
      interiorDesign: Joi.object().keys({
        color: Joi.string().min(2)
      }),
      currentLocation: Joi.number()
        .integer()
        .min(0)
        .max(100)
        .required()
    }
  },
  putResource: {
    params: {
      id: Joi.number()
        .integer()
        .required()
    },
    payload: {
      model: Joi.string().min(2),
      engine: Joi.string().min(5),
      infotainmentSystem: Joi.array().items(Joi.string().min(2)),
      interiorDesign: Joi.object().keys({
        color: Joi.string().min(2)
      }),
      currentLocation: Joi.number()
        .integer()
        .min(0)
        .max(100)
    }
  },
  deleteResource: {
    params: {
      id: Joi.number()
        .integer()
        .required()
    }
  }
}
