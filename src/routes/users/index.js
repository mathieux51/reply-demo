const handlers = require('../../handlers/users')
const config = require('./config')
const schema = require('./schema')

const makeRoutes = config => [
  {
    method: 'GET',
    path: `/${config.endPoint}`,
    handler: handlers.getCollection(config),
    options: {
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
    handler: handlers.getResource(config),
    options: {
      description: `Get ${config.labels.singular} by id`,
      tags: ['api'],
      validate: schema.getResource,
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'POST',
    path: `/${config.endPoint}`,
    handler: handlers.postResource(config),
    options: {
      description: `Post ${config.labels.singular}`,
      tags: ['api'],
      validate: schema.postResource,
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: ['PUT', 'POST'],
    path: `/${config.endPoint}/{id}`,
    handler: handlers.putResource(config),
    options: {
      description: `Update a ${config.labels.singular}`,
      tags: ['api'],
      validate: schema.putResource,
      cors: {
        origin: ['*']
      }
    }
  }
]

module.exports = makeRoutes(config)
