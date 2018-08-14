# Introduction

For this demo, I tried as much as possible to answer each question. My implementation is neither done nor production ready. For each task, I tried to express my thoughts and how I would solve the problem if I was facing it in a work situation. 

# Task 1: database schema design

To design to the database I used [StarUML](http://staruml.io/). The file is [here](https://raw.githubusercontent.com/mathieux51/reply-demo/master/docs/database-schema-design.mdj). I created a screenshot of what I did:

<img src='https://github.com/mathieux51/reply-demo/raw/master/docs/task1.png' width='300'/>

As we can see, there are three entities: `user`, `car` and `demand`. The entity `schedule` could be added. 

# Task 2: management service design and implementation

To create this API, I used `hapi.js`. This framework is perfect to create APIs (HttpAPI). The code is in the `src` directory and has the following structure: 

```
.
├── config.js
├── db.js
├── handlers
│   ├── cars
│   ├── demands
│   └── users
├── index.js
├── queries
│   ├── cars
│   ├── demands
│   └── users
├── routes
│   ├── api.js
│   ├── cars
│   ├── demands
│   └── users
└── utils.js
```

To ease development, the db is held in memory and has two item for each entity. Every route has three files: `config`, `index` and `schema`. The schema file contains information to validate the schema (payload and params) with [Joi](https://github.com/hapijs/joi). A [`failAction`](https://hapijs.com/tutorials/validation#user-content-responsefailaction) handler should be implemented for every route that needs it, because it helps the API users in case of a payload/params error. 

Every handler has 6 files:

```
.
├── entityName
│   ├── delete-resource.js
│   ├── get-collection.js
│   ├── get-resource.js
│   ├── index.js
│   ├── post-resource.js
│   └── put-resource.js
```

EntityName represents one of the following: `user`, `demand` and `car`. 

Except for `index.js`, they all correspond to a method: 

* `get-collection`: `READ` a collection of all the items
* `get-resource`: `READ` one specific resource
* `post-resource`: `CREATE` a new item
* `put-resource`: `UPDATE` an existing item
* `delete-resource`: `DELETE` an existing item

I tried as much as possible to isolate the queries (`src/queries/entityName`) in case I would have to add a database. Let's now look at how start the server.

## Getting started

To install the dependencies and start the server:

```bash
npm install
# Start dev server
npm start
```

*NB:* To make sure the db is always consistent, I would need to consider other cases. 

## Swagger

I added a swagger documentation of all the accessible endpoints. Here is [the link](https://reply-demo-iot.herokuapp.com/documentation).

# Task 3: Schedule service design and implementation

I didn't have time to fully design and implement the schedule service, so I'll explain how I would have completed this task. 

First, I would add fake data with [Faker.js](https://github.com/marak/Faker.js/) to generate data and [Elasticsearch](https://github.com/elastic/elasticsearch-js) to search the fake data. Second, I create a new endpoint `/schedule`. I look for cars that have the required features. If no cars were found, I send a response with that information. Second, I check if the desired pick-up and drop-off location are correct. I choose a simple 1-dimensional coordinate system that goes from 0 to 100. I choose how long it takes to go from 0 to 100. With that information, it would be possible to calculate the latest drop-off time depending on what the earliest pick-up time is. To handle the manipulation of dates, I would use [Moment.js](https://momentjs.com/). The current implementation only converts timestamps to strings which is not ideal. 

Finally I would add tests with the two following strategies: 

# Task 4: management and schedule service testing

## [Lab](https://github.com/hapijs/lab)

To test this `hapi.js` I would do unit testing with Lab. I would write a test plan. Every test should know where to start in the process, what to test, and what not to test. Handlers should be tested with all the fail and success cases. This idea is to have the maximum code coverage when running this command: 

```
npm run test:coverage
``` 

Lab tests are located in the `test` directory.

## Postman

*Postman export is included in `/docs`. To import it follow [this link](https://www.getpostman.com/docs/v6/postman/collections/data_formats#exporting-and-importing-postman-data).*

I use Postman to test the consistency of the API. I did some very simple test. This command

```bash
npm run test:postman
```

will show the results. The output would look like this: 

```
reply-demo

❏ users
↳ /users
  GET http://localhost:8081/users [200 OK, 381B, 30ms]
  ✓  Status code is 200

↳ /users/:id
  GET http://localhost:8081/users/1 [200 OK, 334B, 12ms]
  ✓  Status code is 200

↳ /users
  POST http://localhost:8081/users [201 Created, 354B, 7ms]
  ✓  Status code is 201

↳ /users/:id
  PUT http://localhost:8081/users/0 [200 OK, 312B, 8ms]
  ✓  Status code is 200

↳ /users/:id
  DELETE http://localhost:8081/users/0 [204 No Content, 197B, 4ms]
  ✓  Status code is 204

❏ demands
↳ /demands
  GET http://localhost:8081/demands [200 OK, 716B, 3ms]
  ✓  Status code is 200

↳ /demands/:id
  GET http://localhost:8081/demands/1 [200 OK, 495B, 4ms]
  ✓  Status code is 200

↳ /demands
  POST http://localhost:8081/demands [201 Created, 450B, 3ms]
  ✓  Status code is 201

↳ /demands/:id
  PUT http://localhost:8081/demands/0 [200 OK, 485B, 7ms]
  ✓  Status code is 200

↳ /demands/:id
  DELETE http://localhost:8081/demands/0 [204 No Content, 197B, 4ms]
  ✓  Status code is 204

❏ cars
↳ /cars
  GET http://localhost:8081/demands [200 OK, 677B, 2ms]
  ✓  Status code is 200

↳ /cars/:id
  GET http://localhost:8081/cars/0 [200 OK, 507B, 2ms]
  ✓  Status code is 200

↳ /cars
  POST http://localhost:8081/cars [201 Created, 527B, 15ms]
  ✓  Status code is 201

↳ /cars/:id
  PUT http://localhost:8081/cars/0 [200 OK, 485B, 5ms]
  ✓  Status code is 200

↳ /cars/:id
  DELETE http://localhost:8081/cars/0 [204 No Content, 197B, 5ms]
  ✓  Status code is 204

┌─────────────────────────┬──────────┬──────────┐
│                         │ executed │   failed │
├─────────────────────────┼──────────┼──────────┤
│              iterations │        1 │        0 │
├─────────────────────────┼──────────┼──────────┤
│                requests │       15 │        0 │
├─────────────────────────┼──────────┼──────────┤
│            test-scripts │       15 │        0 │
├─────────────────────────┼──────────┼──────────┤
│      prerequest-scripts │        0 │        0 │
├─────────────────────────┼──────────┼──────────┤
│              assertions │       15 │        0 │
├─────────────────────────┴──────────┴──────────┤
│ total run duration: 646ms                     │
├───────────────────────────────────────────────┤
│ total data received: 2.44KB (approx)          │
├───────────────────────────────────────────────┤
│ average response time: 7ms                    │
└───────────────────────────────────────────────┘
```

Testing with Postman makes it easy for your user to see working examples. It's also very convenient in case your API changes versions. 

## Continuous integration

Lab unit tests and Postman/Newman tests should be added in the pipeline of the continuous integration. It won't be possible to update the API if one of the tests fails. 

# Conclusion

Doing this demo was very fun. The IoT topic is wide and I'd like to work more with it. Hapi is a very nice framework to work with and the ecosystem around it produces everything you need. I also enjoyed using Postman/Newman as a testing tool. They made it easy to version and test APIs. I would have liked to implement the schedule service. Some things that could be added to this project is a real database like Postgres and/or Redis (PubSub for demands and caching), as well as a regression testing CI pipeline. 