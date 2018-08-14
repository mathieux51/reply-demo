# Introduction

For this demo I tried as much as possible to answer each question. My implementation is neither done nor production ready. I tried for each task to express my thoughts and how I would solve the problem. 

# Task 1: database schema design

To design to the database I used StarUML. The file is [here](https://raw.githubusercontent.com/mathieux51/reply-demo/master/docs/database-schema-design.mdj). I created a screenshot of what I did:

<img src='https://github.com/mathieux51/reply-demo/raw/master/docs/task1.png' width='300'/>

As we can see, there is tree entities: `user`, `car` and `demand`. The entity `schedule` could be added. 

# Task 2: management service design and implementation

To create this API, I used `hapi.js`. This framework is perfect to create APIs (HttpAPI). 

## Getting started

To install the dependencies and start the server:

```bash
npm install
# Start dev server
npm start
```

To make sure the db is always consistent, I would need to consider other cases. 

## Swagger

I added a swagger documentation off all the accessible endpoints. Here is [the link](https://reply-demo-iot.herokuapp.com/documentation).

# Task 3: Schedule service design and implementation

Because I'm out of time to do the design and implementation of the schedule service, I'm going to explain what I would do if I had more time to do the implementation. 

First, I have to add fake data with [Faker.js](https://github.com/marak/Faker.js/) to get generate data and [Elasticsearch](https://github.com/elastic/elasticsearch-js) to search the fake data. Second, I create a new endpoint `/schedule`. I would look for cars that have the required features. If no cars were found, I would send a response with that information. Second I would check for the desired pick-up and drop-off location are correct. I chose a simple 1-dimensional coordinate system that goes from 0 to 100. I would choose how long it takes to go from 0 to 100. With that information, it would be possible to calculate the latest drop-off time depending on what the earliest pick-up time is. To handle the manipulation of dates, I would use [Moment.js](https://momentjs.com/). The current implementation only converts timestamps to strings which is not ideal.

Finally I would add tests with the two following strategies. 

# Task 4: management and schedule service testing

## [Lab](https://github.com/hapijs/lab)

To test this `hapi.js` I would do unit testing with Lab. I would  write a test plan. Every test should where to start in the process, what to test and what not to test. I would test fail cases as well. This idea is to have the maximum code coverage when running this command: 

```
npm run test:coverage
``` 

## Postman

*Postman export is included in `/postman`. To import it follow [this link](https://www.getpostman.com/docs/v6/postman/collections/data_formats#exporting-and-importing-postman-data).*

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