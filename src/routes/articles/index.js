const handlers = require('../../handlers/articles')
const config = require('./config')
const schema = require('./schema')

const Joi = require('joi')

const makeRoutes = config => [
  {
    method: 'GET',
    path: `/${config.endPoint}`,
    config: {
      handler: handlers.getCollection(config),
      description: `List all ${config.labels.plural}`,
      tags: ['api'],
      validate: schema.getCollection,
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'GET',
    path: `/${config.endPoint}/{id}`,
    config: {
      handler: handlers.getResource(config),
      description: `Get ${config.labels.singular} by id`,
      tags: ['api'],
      validate: schema.getResource,
      cors: {
        origin: ['*']
      }
    }
  },
]

module.exports = makeRoutes(config)