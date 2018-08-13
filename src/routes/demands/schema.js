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
      userId: Joi.number()
        .integer()
        .required(),
      carId: Joi.number()
        .integer()
        .required(),
      pickUpLocation: Joi.number()
        .integer()
        .min(0)
        .max(100)
        .required(),
      dropOffLocation: Joi.number()
        .integer()
        .min(0)
        .max(100)
        .required(),
      earliestPickUpTime: Joi.string()
        .regex(/^\d{13}$/)
        .required(),
      latestDropOffTime: Joi.string()
        .regex(/^\d{13}$/)
        .required(),
      carFeatures: Joi.array().items(Joi.string().min(2))
    }
  },
  putResource: {
    params: {
      id: Joi.number()
        .integer()
        .required()
    },
    payload: {
      pickUpLocation: Joi.number()
        .integer()
        .min(0)
        .max(100),
      dropOffLocation: Joi.number()
        .integer()
        .min(0)
        .max(100),
      earliestPickUpTime: Joi.string().regex(/^\d{13}$/),
      latestDropOffTime: Joi.string().regex(/^\d{13}$/),
      carFeatures: Joi.array().items(Joi.string().min(2))
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
