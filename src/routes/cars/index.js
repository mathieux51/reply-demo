const handlers = require('../../handlers/cars')
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
    method: 'PUT',
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
  },
  {
    method: 'DELETE',
    path: `/${config.endPoint}/{id}`,
    handler: handlers.deleteResource(config),
    options: {
      description: `Delete a ${config.labels.singular}`,
      tags: ['api'],
      validate: schema.deleteResource,
      cors: {
        origin: ['*']
      }
    }
  }
]

module.exports = makeRoutes(config)
